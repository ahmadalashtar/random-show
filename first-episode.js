function first_episode() 
{
  let episodes = document.getElementsByClassName("sonra");
  let random_number = Math.floor(Math.random()*episodes.length);
  let item = episodes[episodes.length-1];
  item.click();
}
first_episode();
