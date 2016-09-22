using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Case : MonoBehaviour
{

	public UIManager uiManager;

	public int posX, posY;
	public int moveCost  = 0;

	private Unit unit = null;

	public int debugData = -523;

	// Use this for initialization
	void Start () 
	{
		
	}
	
	// Update is called once per frame
	void Update ()
	{
		
	}

	public void setPosition (int x, int y)
	{
		posX = x;
		posY = y;
	}

	public void setUnit(Unit u)
	{
		unit = u;
	}

	public Unit getUnit()
	{
		return unit;
	}

	void OnMouseDown()
	{
		uiManager.onCaseClick (this);
	}
}
