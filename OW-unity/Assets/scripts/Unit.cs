using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Unit : MonoBehaviour
{


	public int movePoint = 5;

	private static Color SELECTED_COLOR = new Color(1, 0, 0);


	private Case attachedCase = null;
	// Use this for initialization
	void Start ()
	{
		
	}
	
	// Update is called once per frame
	void Update ()
	{
		
	}

	public void setCase(Case c)
	{
		attachedCase = c;
	}

	public Case getCase()
	{
		return attachedCase;
	}

	public void setSelected(bool selected)
	{
		if (selected)
		{
			gameObject.GetComponent<SpriteRenderer> ().material.color = SELECTED_COLOR;
		}
		else
		{
			gameObject.GetComponent<SpriteRenderer> ().material.color = Color.white;
		}
	}
}
