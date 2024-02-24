(function() {
    'use strict';
    console.log('running js');

    const plantInfo = document.querySelector('article');
    const garden = document.getElementById('garden');

    document.getElementById('athea').addEventListener('mouseover', function(){
        plantInfo.innerHTML = '<h3>Pothos `N Joy</h3><p><strong>Color:</strong> Cream-colored along the green leaves</p><p><strong>Age:</strong> 1.5 years</p><p><strong>Name:</strong> Athea, a play on the greek goddess name Athena, the goddess of wisdom and warfare. I chose this name because Athea has taught me about observation and patience. Athena sometimes did things that did not work out, but she did not allow herself to get tangled up in mistakes. Athea and I have been through sickness together; actually when I moved into my new place she was not a fan. Bringing it out of that state took a few mistakes but its in great condition now!</p><p><strong>Simple Care:</strong> Pothos `N Joy thrives in bright indirect sunlight but can adapt to lower light conditions. I water Athea with two glasses of water every two weeks and she has grown quit a bit since I have had her! </p><p>PS: This plant is toxic to animals :O</p>';
        garden.style.animationPlayState = 'paused';
    });

    document.getElementById('athea').addEventListener('mouseout', function(){
        plantInfo.innerHTML = '<h3>Welcome to my garden!</h3><p>Hover over one of my pretty babies (choose a plant) :)</p>';
        garden.style.animationPlayState = 'running';
    });
    // vincent
    document.getElementById('vincent').addEventListener('mouseover', function(){
        plantInfo.innerHTML = '<h3>Snake Plant</h3><p><strong>Color:</strong> Shades of gray, silver, and/or gold</p><p><strong>Age:</strong> 2 years</p><p><strong>Name:</strong> Vincent Apollo, originally named Apollo but, I had a cat named Apollo that is now gone so I wanted to change the name. I chose Apollo first because Apollo is the god of music, dance, and more; the arts. I love the arts and their creative spaces and Vincent was my first plant, its presence made my room feel like a more creative space. I chose Vincent because it seemed like a Vincent (no thought, just feeling).</p><p><strong>Simple Care:</strong> Snake plants prefer bright, indirect light and can even tolerate some direct sunlight. However, they also grow well and slower in shady corners and other low-light areas. Vincent is my least needy plant so I water him with one glass of water every two weeks or so.</p>';
        garden.style.animationPlayState = 'paused';
    });

    document.getElementById('vincent').addEventListener('mouseout', function(){
        plantInfo.innerHTML = '<h3>Welcome to my garden!</h3><p>Hover over one of my pretty babies (choose a plant) :)</p>';
        garden.style.animationPlayState = 'running';
    });
    // diony
    document.getElementById('diony').addEventListener('mouseover', function(){
        plantInfo.innerHTML = '<h3>Phalaenopsis Orchid</h3><p><strong>Color:</strong> Shades of purple, white, and green (mine is speckled)</p><p><strong>Age:</strong> ~6 months</p><p><strong>Name:</strong> Diony, a play on the greek god name Dionysus, the god of wine and pleasure. I chose this name because this is one of the hardest plants I have had to tend to. Not difficult but there was a momment I thought it was gonna die, and I was able to save it which made me feel drunk with love for it; now I am super watchful of its growth. Unfortunately due to the winter season all of the flowers have fallen off.</p><p><strong>Simple Care:</strong> Orchids have very widely varying light needs and understanding the right amount of light for the type of orchid is crucial to their care. This orchid likes bright indirect sun light most. I water this plant once a week, by setting it`s container in a pot of water for 5-7 minutes, rinsing, and letting it drip dry before placing it back into its vase.</p>';
        garden.style.animationPlayState = 'paused';
    });

    document.getElementById('diony').addEventListener('mouseout', function(){
        plantInfo.innerHTML = '<h3>Welcome to my garden!</h3><p>Hover over one of my pretty babies (choose a plant) :)</p>';
        garden.style.animationPlayState = 'running';
    });

    garden.addEventListener('mouseout', function() {
        plantInfo.innerHTML = '<h3>Welcome to my garden!</h3><p>Hover over one of my pretty babies (choose a plant) :)</p>';
    });

    // Add animation end listener to restart animation when it ends: learned animationiteration
    garden.addEventListener('animationiteration', function() {
        plantInfo.innerHTML = '<h3>Welcome to my garden!</h3><p>Hover over one of my pretty babies (choose a plant) :)</p>';
    });
})();