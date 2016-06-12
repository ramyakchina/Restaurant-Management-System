/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

   var action=1;
   var change=2;
   var add=1;
function animate()
{
    

    if(action==2)
    {
        document.images[5].src="Images/manch.jpg";
        action=3;
    }
   else  if(action==3)
    {
        document.images[5].src="Images/kathi.jpg";
        action=4;
    }
    else  if(action==4)
    {
        document.images[5].src="Images/naan.jpg";
        action=5
    }
   else  if(action==5)
    {
        document.images[5].src="Images/paneer.jpg";
        action=6;
    }
    else  if(action==6)
    {
        document.images[5].src="Images/desert1.jpg";
        action=7;
    }
    else  if(action==7)
    {
        document.images[5].src="Images/drinks.jpg";
        action=1;
    }
  else   if(action==1)
    {
        document.images[5].src="Images/biryani.jpg";
        action=2;
    }
    
    if(change==2)
    {
        document.images[1].src="Images/event2.png";
        change=1;
    }
    else if(change==1)
        {
        document.images[1].src="Images/event1.png";
        change=2;
    }
         if(add==1)
    {
        document.images[6].src="Images/add2.jpg";
        add=2;
    }
    else if(add==2)
        {
        document.images[6].src="Images/add3.jpg";
        add=3;
    }
    else  if(add==3)
    {
        document.images[6].src="Images/add4.png";
        add=4;
    }
      else if(add==4)
    {
        document.images[6].src="Images/add1.jpg";
        add=1;
    }
    
}
