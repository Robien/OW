using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
	public int maxItt = 0;

	public class World
	{
		public Case[,] terrain;

		public void init(int x, int y)
		{
			terrain = new Case[x,y];
		}

		public Case getCase(int x, int y)
		{
			if (x >= terrain.GetLength (0) || x < 0 || y >= terrain.GetLength (1) || y < 0) 
			{
				return null;
			}
			return terrain[x, y];
		}
	}

	public class PathFinderData
	{
		public Case PreviusCase = null;
		public int distance = int.MaxValue;
	}


	public class WorldPathFinder
	{
		public World world;
		public PathFinderData[,] data;
		
		public WorldPathFinder(World w)
		{
			world = w;
			data = new PathFinderData[w.terrain.GetLength(0),w.terrain.GetLength(1)];
			Debug.Log("created data [" + data.GetLength(0) + ", " + data.GetLength(1) + "]");
		}
	}


	private World world = null;
	private WorldPathFinder currentPathFinder = null;
	private Unit selectedUnit = null;


	// Use this for initialization
	void Start ()
	{
		
	}
	
	// Update is called once per frame
	void Update ()
	{
		
	}

	public void declareWorld(int x, int y)
	{
		world = new World ();
		world.init (x, y);
	}

	public void addCase(int x, int y, Case c)
	{
		world.terrain [x, y] = c;
	}

	public void deleteWorld()
	{
		world = null;
	}


	public void onCaseClick(Case c)
	{
		if (c.getUnit () == null) 
		{
			Debug.Log (c.posX + " - " + c.posY); 
			if (selectedUnit) 
			{
				selectedUnit.setSelected (false);
				setSelectedUnit (null);
			}
		}
		else
		{
			if (selectedUnit && selectedUnit != c.getUnit ()) 
			{
				selectedUnit.setSelected (false);
				c.getUnit ().setSelected (true);
			}
			else if (selectedUnit != c.getUnit ())
			{
				c.getUnit ().setSelected (true);
			}

			setSelectedUnit(c.getUnit ());

			Debug.Log (c.posX + " - " + c.posY + " " + c.getUnit().gameObject.name); 
		}
	}

	public void setSelectedUnit(Unit unit)
	{
		selectedUnit = unit;
		if (unit != null)
		{
			computePossiblePaths (unit);
		}
	}

	private void computePossiblePaths(Unit unit)
	{
		currentPathFinder = new WorldPathFinder (world);
		maxItt = 0;
		computePossiblePathsRecursif (unit, unit.getCase (), null, unit.movePoint);
	}

	private void computePossiblePathsRecursif(Unit unit, Case c, Case previous, int movePoint)
	{
		if (c == null || movePoint < c.moveCost) 
		{
			return;
		}
		maxItt++;
		if (maxItt > 1000)
		{
			return;
		}

		int x = c.posX;
		int y = c.posY;
		//Debug.Log (maxItt + " : " + x + " - " + y + " => " + movePoint);

		if (currentPathFinder.data [x, y] == null)
		{
			currentPathFinder.data [x, y] = new PathFinderData ();
		}
		else if (currentPathFinder.data [x, y].distance > movePoint)
		{
			return;
		}
			
		int remainingMovePoint = movePoint - c.moveCost;
		if (previous == null)
		{
			remainingMovePoint = movePoint;
		}

		{
			currentPathFinder.data [x, y].distance = remainingMovePoint;
			currentPathFinder.data [x, y].PreviusCase = previous;
			c.gameObject.GetComponent<SpriteRenderer> ().color = Color.yellow;
			c.debugData = remainingMovePoint;
		}

		computePossiblePathsRecursif(unit, world.getCase(x + 1, y), c, remainingMovePoint);
		//computePossiblePathsRecursif(unit, world.getCase(x + 1, y + 1), c, remainingMovePoint);
		//computePossiblePathsRecursif(unit, world.getCase(x + 1, y - 1), c, remainingMovePoint);
		computePossiblePathsRecursif(unit, world.getCase(x, y + 1), c, remainingMovePoint);
		computePossiblePathsRecursif(unit, world.getCase(x, y - 1), c, remainingMovePoint);
		//computePossiblePathsRecursif(unit, world.getCase(x - 1, y + 1), c, remainingMovePoint);
		computePossiblePathsRecursif(unit, world.getCase(x - 1, y), c, remainingMovePoint);
	//	computePossiblePathsRecursif(unit, world.getCase(x - 1, y - 1), c, remainingMovePoint);

	}
}
