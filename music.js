const ap = new APlayer({
    container: document.getElementById('player'),
    mini: true,
    autoplay: false,
    fixed: true,
    theme: '#FADFA3',
    loop: 'all',
    preload: 'auto',
    volume: 0.7,                     
    listFolded: true,
    audio: [
        {
            name: 'Windy Hill',
            artist: '羽肿',
            url: 'http://music.163.com/song/media/outer/url?id=427606780.mp3',
            cover: 'http://p2.music.126.net/dAJR6IWlKitcNVlfQwtgfA==/18241997416865263.jpg',
            lrc: '',
            theme: '#ebd0c2'
        },
        {
            name: '花火が瞬く夜に',
            artist: '羽肿',
            url: 'http://music.163.com/song/media/outer/url?id=434902428.mp3',
            cover: 'http://p2.music.126.net/f7Nd9FSzVZMkTPWDW_rnOg==/736672800839982.jpg',
            lrc: '',
            theme: '#ebd0c2'
        },
        {
            name: '夏に花が散る',
            artist: '羽肿',
            url: 'http://music.163.com/song/media/outer/url?id=490687121.mp3',
            cover: 'http://p2.music.126.net/sTAnmzTuh0ulGgG5ZltyKQ==/109951162975022170.jpg',
            lrc: '',
            theme: '#ebd0c2'
        },
        {
            name: '바람에 쓰는 편지',
            artist: 'July',
            url: 'http://music.163.com/song/media/outer/url?id=5308003.mp3',
            cover: 'http://p1.music.126.net/KniA66bWqkLXC_Kw9ieAbg==/719080604576655.jpg',
            lrc: '',
            theme: '#ebd0c2'
        },
        {
            name: '기억이 머물던 곳',
            artist: 'July',
            url: 'http://music.163.com/song/media/outer/url?id=28713832.mp3',
            cover: 'http://p1.music.126.net/e-JAyxHRLBaXrmFv8jPnfA==/109951163787075072.jpg',
            lrc: '',
            theme: '#ebd0c2'
        },
        {
            name: 'Somewhere',
            artist: 'July',
            url: 'http://music.163.com/song/media/outer/url?id=5307932.mp3',
            cover: 'http://p1.music.126.net/wpk6nSJhIhmQTzCq7oh_Hg==/731175232477827.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }
    ]
});
