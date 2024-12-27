const users = [
    {
      profilePhoto: "https://pbs.twimg.com/media/FbAF2cVagAAhsAo.jpg:large",
      description: "Cricketer:    INDIA,   RCB <br>Carpediem!",
      username: "virat.kohli",
      fullName: "Virat Kohli",
      mediaUploadedCount: "1,369",
      followersCount: "230M",
      followingCount: 236,
      coverPhoto: "https://i.pinimg.com/736x/92/c1/ac/92c1ac9b46bec55bfe1583a6a9829b67.jpg"
    },
    {
      profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDabkwOFbCPdjcD0m6NSEGn9mtBYnaoGfaB4usLDtWYcsF5TlHvt2Y2Yy3z5U4MWvXyLA&usqp=CAU",
      description: "Cricketer: IND captain ,t-20 WC campian, #Mumbai Cha Raja",
      username: "rohitsharma45",
      fullName: "Rohit Sharma",
      mediaUploadedCount: '1,296',
      followersCount: "42.1M",
      followingCount: 119,
      coverPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoz7-6YdY9Hp1LBWzlGictixwY-5UCol6BlC4kM7ywJCawdnY8SgMZlv2Mt1tr6ow5UM&usqp=CAU"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "18/2 ...LNCT CS... ",
      username: "akshaypatil.32",
      fullName: "Akshay patil",
      mediaUploadedCount: 9,
      followersCount: 485,
      followingCount: 559,
      coverPhoto: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Artist showcasing creativity through vibrant artworks and sketches.",
      username: "artisticSoul",
      fullName: "Ananya Singh",
      mediaUploadedCount: 60,
      followersCount: 6000,
      followingCount: 300,
      coverPhoto: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Photographer capturing moments that tell captivating stories.",
      username: "lensMaster",
      fullName: "Kabir Das",
      mediaUploadedCount: 200,
      followersCount: 15000,
      followingCount: 400,
      coverPhoto: "https://images.unsplash.com/photo-1680539593018-1bab59cafc8f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Bookworm sharing reviews and literary adventures online.",
      username: "readersHaven",
      fullName: "Priya Kapoor",
      mediaUploadedCount: 40,
      followersCount: 3000,
      followingCount: 150,
      coverPhoto: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
  
  var sum = ''

   users.forEach(function(elem){

    sum = sum + `<div class="card">
            <div class="cover">
               <img src=${elem.coverPhoto} alt="">
            </div>
            <img id="profile" src=${elem.profilePhoto} alt="">
            <h3>${elem.username} <i class="ri-shield-check-line"></i></h3>
            <h2>${elem.fullName}</h2>
            <p>${elem.description}</p>
            <div class="line"></div>
            <div class="social">
                <div>
                    <h5>${elem.mediaUploadedCount}</h5>
                    <h6>posts</h6>
                </div>
                <div>
                    <h5>${elem.followersCount}</h5>
                    <h6>followers</h6>
                </div>
                <div>
                    <h5>${elem.followingCount}</h5>
                    <h6>following</h6> 
                </div>
            </div>
        </div>`
   })

   var main = document.querySelector('#main')

   main.innerHTML = sum 