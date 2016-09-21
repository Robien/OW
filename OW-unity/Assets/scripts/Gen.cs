using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gen : MonoBehaviour 
{

	private static int LAYER_TERRAIN = 0;
	private static int LAYER_UNIT = -1;

	public enum TeamColor
	{
		BLUE,
		RED
	}

	public enum TerrainType
	{
		HERBE
	}

	public enum UnitType
	{
		ARCHER
	}


	[System.Serializable]
	public class Terrain
	{
		public GameObject herbe;

		public GameObject getTile(TerrainType type)
		{
			switch (type) 
			{
			case TerrainType.HERBE:
				return herbe;
			}
			return null;
		}
	}

	[System.Serializable]
	public class Units
	{
		public GameObject archer;

		public GameObject getUnit(UnitType type)
		{
			switch (type) 
			{
			case UnitType.ARCHER:
				return archer;
			}
			return null;
		}

	}


	public class World
	{
		public GameObject[,] cases;
		public List<GameObject> units = new List<GameObject>();

		public World(int x, int y)
		{
			cases = new GameObject[x,y];
		}

		public void setCase(int x, int y, GameObject tile)
		{
			cases [x, y] = tile;
		}

		public GameObject getCase(int x, int y)
		{
			return cases [x, y];
		}
	}

	public Terrain terrain;
	public Units unitsRed;
	public Units unitsBlue;
	public UIManager uiManager;

	public GameObject world = null;

	private World worldTerrain;

	// Use this for initialization
	void Start ()
	{
		gen ();
	//	destroy ();
	}
	
	// Update is called once per frame
	void Update ()
	{
		
	}


	void gen()
	{
		world.transform.position = new Vector3 (0, 0, 0);

		genWorld();
		genUnits();

	}

	void destroy()
	{
		destroyUnits();
		destroyWorld();
	}

	void genWorld()
	{
		worldTerrain = new World (10, 5);
		for (int i = 0; i < 10; i++) 
		{
			for (int j = 0; j < 5; j++)
			{
				instantiateTile (i, j);
			}
		}
	}

	void destroyWorld()
	{
		int i = 0;
		while (world.transform.childCount > 0 && i < 10000)
		{
			i++;
			DestroyImmediate(world.transform.GetChild (0).gameObject);
		}
	}


	private void genUnits()
	{
		worldTerrain.units.Add(instantiateUnit (10-10 / 2, 5 / 2, UnitType.ARCHER, TeamColor.RED));
	}

	private void destroyUnits()
	{
		int i = 0;
		while (worldTerrain.units.Count > 0 && i < 10000)
		{
			i++;
			DestroyImmediate(worldTerrain.units[0]);
		}
	}


	private GameObject instantiateTile(int i, int j)
	{
		GameObject tile = Instantiate<GameObject> (terrain.getTile(TerrainType.HERBE));
		Case c = tile.GetComponent<Case> ();
		c.uiManager = uiManager;
		c.setPosition (i, j);
		uiManager.addCase (i, j, c);
		worldTerrain.setCase (i, j, tile);
		tile.name = tile.name + "(" + i + ", " + j + ")";
		tile.transform.SetParent (world.transform);
		Bounds bounds = tile.GetComponent<Renderer> ().bounds;
		float h = bounds.max.x - bounds.min.x;
		float l = bounds.max.y - bounds.min.y;
		tile.transform.localPosition = new Vector3 (i*h + h/2, l*j + l/2, LAYER_TERRAIN);
		return tile;
	}

	private GameObject instantiateUnit(int i, int j, UnitType type, TeamColor color)
	{
		GameObject tile = Instantiate<GameObject> (getUnits(color).getUnit(UnitType.ARCHER));
		tile.transform.SetParent (getTile(i, j).transform);
		getTile (i, j).GetComponent<Case> ().setUnit (tile.GetComponent<Unit> ());
		tile.GetComponent<Unit> ().setCase (getTile (i, j).GetComponent<Case> ());
		tile.transform.localPosition = new Vector3 (0, 0, LAYER_UNIT);
		return tile;
	}

	private Units getUnits(TeamColor color)
	{
		if (color == TeamColor.BLUE) 
		{
			return unitsBlue;
		}
		else if (color == TeamColor.RED)
		{
			return unitsRed;
		}
		else
		{
			return null;	
		}		
	}

	private GameObject getTile(int x, int y)
	{
		return worldTerrain.getCase (x, y);
	}

}
