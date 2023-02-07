for ( let i = 1; i <= 100; i++ )
{
  if ( i%5 === 0  &&  i%7 === 0)
  {
    console.log("FastTrack" );
  }
  else if ( i%7 === 0 ) 
  {
    console.log("Track" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log( "Fast" );
  }
  else
  {
    console.log(i);
  }
}
