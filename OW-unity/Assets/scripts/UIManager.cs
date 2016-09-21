using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{

	public class World
	{
		public Case[,] terrain;

		public void init(int x, int y)
		{
			terrain = new Case[x,y];
		}
	}

	private World world = null;

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
				selectedUnit = null;
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

			selectedUnit = c.getUnit ();

			Debug.Log (c.posX + " - " + c.posY + " " + c.getUnit().gameObject.name); 
		}
	}
}
