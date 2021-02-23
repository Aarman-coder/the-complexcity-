function bounceof(aarman, aarian){
    if (aarman.x - aarian.x < aarian.width/2 + aarman.width/2
      && aarian.x - aarman.x < aarian.width/2 + aarman.width/2) {
        aarman.velocityX = aarman.velocityX * (-1);
        aarian.velocityX = aarian.velocityX * (-1);
  }
  if (aarman.y - aarian.y < aarian.height/2 + aarman.height/2
    && aarian.y - aarman.y < aarian.height/2 + aarman.height/2){
      aarman.velocityY = aarman.velocityY * (-1);
      aarian.velocityY = aarian.velocityY * (-1);
  }
    
  }

  function istouching(obj1, obj2) 
  { if (obj2.x - obj1.x < obj1.width/2 + obj2.width/2 
    && obj1.x - obj2.x < obj1.width/2 + obj2.width/2 
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2 
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2)
     { return true;
    
    } 
     else
      { return false;
    
    }

 }