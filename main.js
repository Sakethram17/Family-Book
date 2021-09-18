var image=[
    "https://cdn1.vectorstock.com/i/1000x1000/25/40/happy-family-cartoon-vector-23512540.jpg",
    
    "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg",
    
    "https://image.shutterstock.com/image-vector/little-boy-260nw-80269489.jpg",
    
    "https://media.istockphoto.com/photos/character-cartoon-girl-on-a-white-background-illustration-for-picture-id1166400008?b=1&k=20&m=1166400008&s=170667a&w=0&h=8L9ZcCuCMypEXbV-lNW4Wh3yUwlKWaqxiDffiZCOFDw=",
    
    "https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700004/20754296-cute-boy-cartoon-standing.jpg"
    
  ];
  
  var i=0;
  
  function nextmove(){
    if(i == 10)
    {
      i=0;
    }
   
  document.getElementById("image1").src=image[i];
    i++;
  }
  