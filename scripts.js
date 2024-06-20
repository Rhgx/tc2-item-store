document.addEventListener('DOMContentLoaded', () => {
    const items = [ // Here are some items I left from my inventory for you to have a refernce of how to write a item.
    {
        "name": "\".\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e2/Silenced_Pistol.png",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Silenced Pistol"]
    },
    {
        "name": "\"spoopy kritz\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d5/Kritzkrieg.png/revision/latest?cb=20221031222800",
        "rarity": "Haunted",
        "category": "weapons",
        "altNames": ["Kritzkrieg"],
        "not-tradeable": true
    },
    {
        "name": "\"La Caution - The Laser Dance Song\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e0/50-AE.png/revision/latest?cb=20230715175450",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["50-AE"]
    },
    {
        "name": "\"Mac'n 🧀\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/MAC-10_render.png/revision/latest/scale-to-width-down/1000?cb=20240107113536",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["MAC-10"],
        "not-tradeable": true
    },
    {
        "name": "\"*blows up pancakes with mind*\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/99/Cowboy_Hat.png/",
        "rarity": "Collector's",
        "category": "cosmetics",
        "altNames": ["Cowboy Hat"]
    },
    {
        "name": "\"Burger King Employee\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/dc/Burger_Boy.png/revision/latest?cb=20240420131219",
        "rarity": "Collector's",
        "category": "cosmetics",
        "altNames": ["Burger Boy"]
    },
    {
        "name": "Collector's Last Bastion",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d8/Last_Bastion.png/revision/latest?cb=20230309073942",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "\"Unusual Buber\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cc/Gas_Hazmask.png/revision/latest?cb=20230301054140",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Burning",
        "altNames": ["Gas Hazmask"],
        "not-tradeable": true
    },
    {
        "name": "\"are you winning son?\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c4/Wonder_Worker.png/revision/latest?cb=20231227053454",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Anarchy Flash",
        "altNames": ["Wonder Worker"]
    },
    {
        "name": "Epic Unusual Cassels Tilt",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/82/Cassel%27s_Tilt.png/revision/latest?cb=20230301062231",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Sparking",
        "not-tradeable": true
    },
    {
        "name": "Unusual Home Readers",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/97/Home_Readers.png/revision/latest?cb=20220807183621",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Fiery Blaze",
        "not-tradeable": true
    },
    {
        "name": "\"クールな日本のキャラクター\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/06/Trilby_Thriller.png/revision/latest?cb=20210801005940",
        "rarity": "Collector's",
        "category": "cosmetics",
        "altNames": ["Trilby Thriller"]
    },
    {
        "name": "Collector's Aces Hight",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/91/Aces_High.png/revision/latest?cb=20230301062008",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "TATENFIGHTING",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4c/Dueling_Game.png/revision/latest?cb=20240112064738",
        "rarity": "Normal",
        "category": "other"
    }];

    const rarityOrder = ["Dorcey", "Collector's", "Self-Made", "Community", "Haunted", "Unusual", "Genuine", "Vintage", "Strange", "Unique", "Experimental", "Rented", "Normal"];

    const rarityColors = {
        "Normal": "#C9C7C8",
        "Rented": "#4C3F34",
        "Experimental": "#69d732",
        "Unique": "#FFD700",
        "Strange": "#CF6A32",
        "Vintage": "#476291",
        "Genuine": "#4D7455",
        "Unusual": "#8650AC",
        "Haunted": "#38F3AB",
        "Community": "#70B04A",
        "Self-Made": "#70B04A",
        "Collector's": "#AA0000",
        "Dorcey": "#A50F79"
    };

    const itemListContainers = {
        "weapons": document.getElementById("weapons"),
        "cosmetics": document.getElementById("cosmetics"),
        "other": document.getElementById("other")
    };
    
    const searchInput = document.querySelector('.search-input');
    const audio = document.querySelector('.audio-player audio');

    let previousIndex = -1;
    const playlist = [
        { name: 'Team Fortress 2 - Upgrade Station [Bossa Nova / Big Band Remix] - Vandoorea', src: 'https://dl.sndup.net/v553j/muffled_sound.mp3' },
        { name: 'Team Fortress 2 - Mercenary Park [Drum & Bass / Big Band Remix] - Vandoorea', src: 'https://dl.sndup.net/z76nt/merc2.mp3' },
        { name: 'Magnum Force Theme [Remix] - Vandoorea', src: 'https://dl.sndup.net/g4mw5/magnum2.mp3' },
        { name: 'Team Fortress 2 - Red Bread [Electronic - Big Band Remix] - Vandoorea', src: 'https://dl.sndup.net/m7q46/bread_muffled.mp3' },
        { name: 'Team Fortress 2 - MEDIC! (Orchestral - Big Band Remix) - Vandoorea', src: 'https://dl.sndup.net/c4267/med_muffled.mp3' },
        { name: 'Team Fortress 2 - Right Behind You [Electronic Jazz Noir Remix] - Vandoorea', src: 'https://dl.sndup.net/6n7pf/spy_muffled.mp3' },
        { name: 'Team Fortress 2 - More Gun (Alex Giudici Remix)', src: 'https://dl.sndup.net/gbbmn/gun_muffled.mp3' },
    ];

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
            var opacity = Math.min(1, (document.documentElement.scrollTop - 20) / 500);
            scrollToTopBtn.style.opacity = opacity;
        } else {
            scrollToTopBtn.style.display = "none";
            scrollToTopBtn.style.opacity = "0";
        }
    }

    items.sort((a, b) => {
        const rarityComparison = rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
        if (rarityComparison !== 0) {
            return rarityComparison;
        }
        return a.name.localeCompare(b.name);
    });

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.setAttribute('data-name', item.name.toLowerCase());

        const altNames = item.altNames ? item.altNames.join(' ').toLowerCase() : '';
        itemElement.setAttribute('data-alt-names', altNames);

        itemElement.style.setProperty('--glow-color', rarityColors[item.rarity]);
        itemElement.style.setProperty('--text-color', rarityColors[item.rarity]);

        const capitalizedCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="filter: drop-shadow(0 0 10px var(--glow-color)) brightness(110%);">
                <div class="name">${item.name}</div>
                <div class="rarity">${item.rarity}</div>
                <div class="tag">${capitalizedCategory}${item["not-tradeable"] ? `<div class="tradeable-tag" style="color: red; font-size:1.5rem;">NFT</div>` : ''}</div>
                ${item.unusual ? `<div class="unusual-icon" title="Unusual: ${item.unusual}">🌠</div><div class="tooltip" style="font-size: 1.2rem;">Unusual: ${item.unusual}</div>` : ''}
            `;

        itemListContainers[item.category].appendChild(itemElement);
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.item-list').forEach(list => list.classList.remove('active'));
            document.getElementById(tab.dataset.category).classList.add('active');
        });
    });

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        let foundItems = 0; // Track the number of found items

        document.querySelectorAll('.item').forEach(item => {
            const itemName = item.getAttribute('data-name');
            const itemAltNames = item.getAttribute('data-alt-names');

            if (itemName.includes(searchValue) || itemAltNames.includes(searchValue)) {
                item.style.display = 'block';
                foundItems++;
            } else {
                item.style.display = 'none';
            }
        });

        // Show message when no items are found
        const noItemsMessage = document.getElementById('no-items-message');
        if (foundItems === 0) {
            noItemsMessage.style.display = 'block';
        } else {
            noItemsMessage.style.display = 'none';
        }

    });

    let isPlaying = false;

    function playRandomTrack() {
        let randomIndex = Math.floor(Math.random() * playlist.length);
        
        while (randomIndex === previousIndex) {
            randomIndex = Math.floor(Math.random() * playlist.length);
        }

        audio.src = playlist[randomIndex].src;
        audio.play();
        previousIndex = randomIndex;
        isPlaying = true;
    }

    audio.addEventListener('ended', function () {
        playRandomTrack();
    });

    audio.addEventListener('play', function () {
        isPlaying = true;
    });

    audio.addEventListener('pause', function () {
        isPlaying = false;
    });

    function playSound() {
        const audio = document.getElementById('button-sound');
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
    }

    function addVisualCue(button) {
        button.classList.add('pulse');
        setTimeout(() => {
            button.classList.remove('pulse');
        }, 300);
    }

    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', () => {
            playSound();
            addVisualCue(button);
        });
    });

    document.querySelectorAll('#scrollToTopBtn').forEach(button => {
        button.addEventListener('click', () => {
            playSound();
        });
        
   twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg',
            className: 'twemoji'
        });         
    });
}); 
