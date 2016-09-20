using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Case : MonoBehaviour
{

	public UIManager uiManager;

	public int posX, posY;

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

	void OnMouseDown()
	{
		uiManager.onCaseClick (this);
	}
}
