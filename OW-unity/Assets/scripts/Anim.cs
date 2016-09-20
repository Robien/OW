using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Anim : MonoBehaviour
{

	public Sprite[] sprites;
	public float period = 1f;
	public bool enableAnim = true;

	private float time = 0;
	private int spriteId = 0;
	private SpriteRenderer SRenderer;

	// Use this for initialization
	void Start () 
	{
		SRenderer = GetComponent<SpriteRenderer> ();
	}
	
	// Update is called once per frame
	void Update ()
	{
		if (enableAnim) 
		{
			time += Time.deltaTime;
			if (time >= period) 
			{
				time -= period;
				changeSprite ();
			}
		}
	}

	void changeSprite()
	{
		spriteId = (spriteId + 1) % sprites.Length;

		SRenderer.sprite = sprites [spriteId];

	}
}
