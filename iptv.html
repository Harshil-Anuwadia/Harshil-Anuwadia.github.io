const defaultPlaylistUrl = "https://braindrop.me/defaultm3uplaylist.m3u";
let channels = []; // Global variable to store parsed channels

async function loadPlaylist(url) {
    const playlistUrl = url || document.getElementById('urlInput').value;

    try {
        // Check if the URL ends with '.m3u8'
        if (playlistUrl.endsWith('.m3u8')) {
            playVideo(playlistUrl);
            return;
        }

        // Fetch and process '.m3u' playlist
        const response = await fetch(playlistUrl);
        const text = await response.text();

        if (playlistUrl.endsWith('.m3u')) {
            channels = parseM3U(text);

            // Sort channels alphabetically by name
            channels.sort((a, b) => a.name.localeCompare(b.name));

            renderChannels(channels);
        } else {
            alert('Invalid playlist or channel URL.');
        }
    } catch (error) {
        alert('Failed to load the playlist.');
        console.error(error);
    }
}

function loadDefaultPlaylist() {
    loadPlaylist(defaultPlaylistUrl);
}

function parseM3U(text) {
    const lines = text.split('\n');
    const parsedChannels = [];
    let currentChannel = {};

    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('#EXTINF')) {
            const nameMatch = line.match(/,(.+)/);
            if (nameMatch) {
                currentChannel.name = nameMatch[1];
            }
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            if (logoMatch) {
                currentChannel.logo = logoMatch[1];
            }
            const categoryMatch = line.match(/group-title="([^"]+)"/);
            if (categoryMatch) {
                currentChannel.category = categoryMatch[1];
            }
        } else if (line && !line.startsWith('#')) {
            currentChannel.url = line;
            parsedChannels.push(currentChannel);
            currentChannel = {};
        }
    }
    return parsedChannels;
}

function renderChannels(channelsToRender) {
    const playlistContainer = document.getElementById('playlistContainer');
    playlistContainer.innerHTML = '';

    channelsToRender.forEach((channel, index) => {
        const div = document.createElement('div');
        div.className = 'channel-item';
        div.onclick = () => showPopup(channel);

        const img = document.createElement('img');
        img.src = channel.logo || 'default-logo.png'; // Default logo if none provided
        img.alt = 'Channel Logo';

        const span = document.createElement('span');
        span.textContent = channel.name || `Stream ${index + 1}`;

        div.appendChild(img);
        div.appendChild(span);
        playlistContainer.appendChild(div);
    });
}

function showPopup(channel) {
    const popup = document.getElementById('popup');
    const channelName = document.getElementById('channelName');
    const channelInfo = document.getElementById('channelInfo');
    const confirmButton = document.getElementById('confirmButton');

    channelName.textContent = channel.name || 'Unknown Channel';
    channelInfo.innerHTML = `
        <img src="${channel.logo || 'default-logo.png'}" alt="Channel Logo" style="width:50px;height:50px;"><br>
        URL: ${channel.url}
    `;

    confirmButton.onclick = () => {
        playVideo(channel.url);
        closePopup();
    };

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function playVideo(url) {
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (Hls.isSupported()) {
        const hls = new Hls({
            liveSyncDurationCount: 3,
            enableWorker: true,
            debug: false
        });
        hls.loadSource(url);
        hls.attachMedia(videoPlayer);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoPlayer.play();
            scrollVideoContainer();
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.error('Network error');
                        hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('Media error');
                        hls.recoverMediaError();
                        break;
                    default:
                        hls.destroy();
                        break;
                }
            }
        });
    } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = url;
        videoPlayer.addEventListener('loadedmetadata', function () {
            videoPlayer.play();
            scrollVideoContainer();
        });
    } else {
        alert('HLS is not supported in this browser.');
    }
}

function scrollVideoContainer() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.scrollIntoView({ behavior: 'smooth' });
}

function filterChannels() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();

    let filteredChannels = channels.filter(channel => {
        const matchesSearch = channel.name.toLowerCase().includes(searchQuery);
        const matchesCategory = categoryFilter === '' || channel.category.toLowerCase() === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    renderChannels(filteredChannels);
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    renderChannels(channels);
}