(function(){
        const plants = document.querySelector('#plants');
        const art = document.querySelector('#art');
        const music = document.querySelector('#music');
        const information = document.querySelector('#info');
        const popup = document.querySelector('#popup');

    plants.addEventListener('click', function(){
        information.innerHTML = '<div id="orchid"><img src ="images/orchid.png" alt="orchid" height="300" width="225"><p>Phalaenopsis Orchid</p></div><div id="pothos"><img src ="images/athea.png" alt="pothos" height="300" width="225"><p>Pothos `N Joy</p></div><div id="snake"><img src ="images/vincent.png" alt="snake plant" height="300" width="225"><p>Snake Plant</p></div>';

        const orchid = document.querySelector('#orchid')
        const pothos = document.querySelector('#pothos')
        const snake = document.querySelector('#snake')
        
        
        orchid.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('plants');
            popup.innerHTML = '<h2>Phalaenopsis Orchid</h2><img src ="images/orchid.png" alt="orchid" height="300" width="225"><p><strong>Color:</strong> Shades of purple, white, and green (mine is speckled)<br><strong>Age:</strong> ~6 months<br><br><strong>Name:</strong> Diony, a play on the greek god name Dionysus, the god of wine and pleasure. I chose this name because this is one of the hardest plants I have had to tend to. Not difficult but there was a momment I thought it was gonna die, and I was able to save it which made me feel drunk with love for it; now I am super watchful of its growth. Unfortunately due to the winter season all of the flowers have fallen off.<br><br><strong>Simple Care:</strong> Orchids have very widely varying light needs and understanding the right amount of light for the type of orchid is crucial to their care. This orchid likes bright indirect sun light most. I water this plant once a week, by setting it`s container in a pot of water for 5-7 minutes, rinsing, and letting it drip dry before placing it back into its vase.</p><button class="closePopup">Close</button>';
        });
        pothos.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('plants');
            popup.innerHTML = '<h2>Pothos `N Joy</h2><img src ="images/athea.png" alt="pothos" height="300" width="225"><p><strong>Color:</strong> Cream-colored along the green leaves<br><strong>Age:</strong> 1.5 years<br><br><strong>Name:</strong> Athea, a play on the greek goddess name Athena, the goddess of wisdom and warfare. I chose this name because Athea has taught me about observation and patience. Athena sometimes did things that did not work out, but she did not allow herself to get tangled up in mistakes. Athea and I have been through sickness together; actually when I moved into my new place she was not a fan. Bringing it out of that state took a few mistakes but its in great condition now!<br><br><strong>Simple Care:</strong> Pothos `N Joy thrives in bright indirect sunlight but can adapt to lower light conditions. I water Athea with two glasses of water every two weeks and she has grown quit a bit since I have had her!</p><p>PS: This plant is toxic to animals :O</p><button class="closePopup">Close</button>';
        });
        snake.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('plants');
            popup.innerHTML = '<h2>Snake Plant</h2><img src ="images/vincent.png" alt="snake plant" height="300" width="225"><p><strong>Color:</strong> Shades of gray, silver, and/or gold<br><strong>Age:</strong> 2 years<br><br><strong>Name:</strong> Vincent Apollo, originally named Apollo but, I had a cat named Apollo that is now gone so I wanted to change the name. I chose Apollo first because Apollo is the god of music, dance, and more; the arts. I love the arts and their creative spaces and Vincent was my first plant, its presence made my room feel like a more creative space. I chose Vincent because it seemed like a Vincent (no thought, just feeling).<br><br><strong>Simple Care:</strong> Snake plants prefer bright, indirect light and can even tolerate some direct sunlight. However, they also grow well and slower in shady corners and other low-light areas. Vincent is my least needy plant so I water him with one glass of water every two weeks or so.</p><button class="closePopup">Close</button>';
        });
        addCloseButtonListeners();
    });
    addCloseButtonListeners();

    art.addEventListener('click', function(){
        information.innerHTML = '<div id="orca"><img src="images/orcaCanvas.png" alt="Orca painting" width="200" height="150"><p>Orcas x Aurora Borealis</p></div><div id="lava"><img src="images/lavaCanvas.png" alt="Volcano painting" width="200" height="124"><p>Volcano x Space</p></div><div id="clouds"><img src="images/skyCanvas.png" alt="cloudy sky" width="200" height="150"><p>Moonlight Clouds</p></div><div id="dunks"><img src="images/shoesOG.png" alt="Painted dunks" width="181" height="200"><p>Orange Bottom Dunks :O</p></div><div id="blazers"><img src="images/shoes.png" alt="Painted blazers" width="190" height="200"><p>Nikes blazers: I don`t like them...yet</p></div>';
        
        const orca = document.querySelector('#orca')
        const lava = document.querySelector('#lava')
        const clouds = document.querySelector('#clouds')
        const dunks = document.querySelector('#dunks')
        const blazers = document.querySelector('#blazers')

        orca.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('art');
            popup.innerHTML = '<h2>Orcas x Aurora Borealis</h2><img src="images/orcaCanvas.png" alt="orcas" width="300" height="250"><p>Acryilic Painting<br>3 hours<br><br><strong>Vibes: </strong> Colorful, dark, and dull<br><br><strong>Why: </strong> I decided to paint orcas because they`re one of my favorite animal. They`re typically seen in colder waters like Antarctica, Norway, and Alaska which is also where the Aurora Borealis can be seen. I decided to paint the aurora in the sky behind the orcas and it turned out to be one of my favorite pieces.</p><br><button class="closePopup">Close</button>';
        });
        lava.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('art');
            popup.innerHTML = '<h2>Volcano x Space</h2><img src="images/lavaCanvas.png" alt="Volcano painting" width="300" height="224"><p>Acryilic Painting<br>1.5 hours<br><br><strong>Vibes: </strong> Spacey, catastrophic, and vibrant<br><br><strong>Why: </strong> This image began with a volcano, it was very plain with just the lava so I wanted to add more to the skyline. I decided to go with planets saturn and juipiter because I like them the most and felt they were fitting for this image.</p><br><button class="closePopup">Close</button>';
        });
        clouds.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('art');
            popup.innerHTML = '<h2>Moonlight Clouds</h2><img src="images/skyCanvas.png" alt="cloudy sky" width="300" height="250"><p>Acryilic Painting<br>1.5 hours<br><br><strong>Vibes: </strong> Somber, dark, and nostolgic<br><br><strong>Why: </strong> Decided to paint this with my friend, on that day she experienced something really painful so we painted our moods. The painting depicts falling into a dream like state which reflects feeling lost and uncertain.</p><br><button class="closePopup">Close</button>';
        });
        dunks.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('art');
            popup.innerHTML = '<h2>Orange Bottom Dunks :O</h2><img src="images/shoesOG.png" alt="Dunks" width="281" height="300"><p>Shoe Project: acrylic<br>3 hours<br><br><strong>Vibes: </strong> Something new<br><br><strong>Why: </strong> I got a matching pair of dunks with my friend, I really didn`t like the original color which was just orange and white. I wanted to be able to better coordinate them with my outfits so I painted them with a brown scheme. Theres a bit of damage done to the paint, I wore them once and much of the paint cracked away. I am still trying to figure out how to stop the fall off from happening.</p><br><button class="closePopup">Close</button>';
        });
        blazers.addEventListener('click', function(){
            popup.style.display = 'block';
            popup.classList.add('art');
            popup.innerHTML = '<h2>Nikes blazers: I don`t like them...yet</h2><img src="images/shoes.png" alt="blazers" width="290" height="300"><p>Shoe Project: acrylic<br>5 hours<br><br><strong>Vibes: </strong> Need new gym shoes<br><br><strong>Why: </strong> I got a matching pair of blazers with my little, we painted them together and I didn`t like how mine originally came out so I repainted them but, I and still not satisfied. I will probably be repaintiing them again soon, unsure of how I will make them better for my liking.</p><br><button class="closePopup">Close</button>';
        });
        addCloseButtonListeners();
    });
    addCloseButtonListeners();

    music.addEventListener('click', function(){
        information.innerHTML = '<div id="edtb"><img src="images/edtb.jpeg" alt="edtb" width="100" height="100"><p>Everyday Type Beat</p></div><br><div id="goCrazy"><img src="images/goCrazy.jpeg" alt="go crazy" width="100" height="100"><p>Go Crazy</p></div><br><div id="kPop"><img src="images/kpop.jpeg" alt="kpop" width="100" height="100"><p>Kpop🔛🔝</p></div><br><div id="roomRave"><img src="images/roomRave.jpeg" alt="roomRave" width="100" height="100"><p>Room Rave</p></div><br><div id="gvo"><img src="images/gvo.jpeg" alt="gvo" width="100" height="100"><p>Good Vibes Only</p></div><br><div id="scream"><img src="images/scream.jpeg" alt="scream" width="100" height="100"><p>Whys Everyone Screaming</p></div><br>';

        const everyDay = document.querySelector('#edtb')
        const goCrazy = document.querySelector('#goCrazy')
        const kpop = document.querySelector('#kPop')
        const roomRave = document.querySelector('#roomRave')
        const goodVibe = document.querySelector('#gvo')
        const scream = document.querySelector('#scream')

        everyDay.addEventListener('click',function(){
            popup.style.display = 'block';
            popup.classList.add('music');
            popup.innerHTML = '<h2>Everyday Type Beat</h2><img src="images/edtb.jpeg" alt="edtb" width="175" height="175"><p>Rnb and Hiphop<br>252 songs<br>14hr 22min<br><br><strong>Favorite Artists:</strong><ul><li>Sza</li><li>Kendric Lamar</li><li>Summer Walker</li><li>Umi</li><li>J.Cole</li></ul><br><br><strong>When I`m Listening: </strong> I usually listen to this playlist during my leasure time, usually when I want to slow down and relax a bit. I play this when I paint, take a walk, do chores, or study but only in the afternoon, as it is too slow and may put me to sleep when studying at night.</p><p><a href="https://open.spotify.com/playlist/6EULDrhOE7nGWpKLVzJPnM?si=88eb786d624543b3">Click me to check the playlist out on Spotify</a></p><br><button id="closePopup">Close</button>';
        });
        goCrazy.addEventListener('click',function(){
            popup.style.display = 'block';
            popup.classList.add('music');
            popup.innerHTML = '<h2>Go Crazy</h2><img src="images/goCrazy.jpeg" alt="go crazy" width="175" height="175"><p>Hard Style EDM<br>55 songs<br>3hr 16min<br><br><strong>Favorite Artists:</strong><ul><li>Kai Wachi</li><li>Slander</li><li>Excision</li><li>ATLiens</li><li>ISOxo</li></ul><br><br><strong>When I`m Listening: </strong> I usually listen to this playlist when its time to get hyped, usually when I`m with friends or need to pick up the pace. I play this when I go to the gym, going out with friends, need to wake up or walk to scool quickly.</p><p><a href="https://open.spotify.com/playlist/4X2XLUNIvt90mgqudehPQC?si=d054f05b8b434de8">Click me to check the playlist out on Spotify</a></p><br><button class="closePopup">Close</button>';
        });
        kpop.addEventListener('click',function(){
            popup.style.display = 'block';
            popup.classList.add('music');
            popup.innerHTML = '<h2>Kpop🔛🔝</h2><img src="images/kpop.jpeg" alt="kpop" width="175" height="175"><p>Kpop (Korean Pop)<br>80 songs<br>4hr 30min<br><br><strong>Favorite Artists:</strong><ul><li>miss A</li><li>Apink</li><li>Red Velvet</li><li>IU</li><li>GFriend</li></ul><br><br><strong>When I`m Listening: </strong> I usually listen to this playlist when I have things to do but I have some time to do them. I play this when I have work to do or I am bored and wanna see if I still remember the dances.</p><p><a href="https://open.spotify.com/playlist/3WIPWFJEopGdLxtL9vnTKA?si=5dd4cbda5eab4d51">Click me to check the playlist out on Spotify</a></p><br><button class="closePopup">Close</button>';
        });
        roomRave.addEventListener('click',function(){
            popup.style.display = 'block';
            popup.classList.add('music');
            popup.innerHTML = '<h2>Room Rave</h2><img src="images/roomRave.jpeg" alt="roomRave" width="175" height="175"><p>Medlodic EDM<br>62 songs<br>3hr 54min<br><br><strong>Favorite Artists:</strong><ul><li>Slander</li><li>Dabin</li><li>Gryffin</li><li>Illenium</li><li>Seven Lions</li></ul><br><br><strong>When I`m Listening: </strong> I usually listen to this playlist when I am busy. I play this when I am doing work early in the morning or late at night, warming up at the gym, walking to class, or walking anywhere really.</p><p><a href="https://open.spotify.com/playlist/6z5ed9aDlXE45DRXWAqRTu?si=b5664d963a1444dc">Click me to check the playlist out on Spotify</a></p><br><button class="closePopup">Close</button>';
        });
        goodVibe.addEventListener('click',function(){
            popup.style.display = 'block';
            popup.classList.add('music');
            popup.innerHTML = '<h2>Good Vibes Only</h2><img src="images/gvo.jpeg" alt="gvo" width="175" height="175"><p>2000s-2010s Pop/Rap<br>93 songs<br>6hr 7min<br><br><strong>Favorite Artists:</strong><ul><li>Drake</li><li>Flo Rida</li><li>Rihanna</li><li>Kanye West</li><li>Black Eyed Peas</li></ul><br><br><strong>When I`m Listening: </strong> I usually listen to this playlist when I am going out. I play this when I am getting ready or walking to class.</p><p><a href="https://open.spotify.com/playlist/5lCQ23Qf5v3b927Fvnqwpc?si=8048748c8da34de3">Click me to check the playlist out on Spotify</a></p><br><button class="closePopup">Close</button>';
        });
        scream.addEventListener('click',function(){
            popup.style.display = 'block';
            popup.classList.add('music');
            popup.innerHTML = '<h2>Why`s Everyone Screaming</h2><img src="images/scream.jpeg" alt="scream" width="175" height="175"><p>Mix of Alternative/Indie, RnB, and Pop<br>29 songs<br>1hr 57min<br><br><strong>Favorite Artists:</strong><ul><li>Jessie Reyez</li><li>Ms. Lauryn Hill</li><li>Paramore</li><li>Demi Lovato</li><li>Keri Hilson</li></ul><br><br><strong>When I`m Listening: </strong> I usually listen to this playlist when I don`t know what to listen to but I need to listen to something. I play this when I am getting ready, walking to class, doing work, chillen in my room, or just need to yell or hear someone yell some lyrics.</p><p><a href="https://open.spotify.com/playlist/4IovNKAMsoYoqD7C3qiJ6X?si=3d0681962b7d41fb&pt=6fc6f1ec9279435534a717720fa1954c">Click me to check the playlist out on Spotify</a></p><br><button class="closePopup">Close</button>';
        });
        addCloseButtonListeners();
    });

    function addCloseButtonListeners(){
        const closePopupBtns = document.querySelectorAll('.closePopup');
        closePopupBtns.forEach(function(btn){
            btn.addEventListener('click', function(){
                popup.style.display = 'none';
                popup.style.display='hidden';
                popup.innerHTML = '';
            });
        });
    }
}());
