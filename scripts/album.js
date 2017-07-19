var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumExample = {
     title: 'Example',
     artist: 'Placeholder',
     label: 'EM',
     year: '2017',
     albumArtUrl: 'assets/images/album_covers/17.png',
     songs: [
         { title: 'Track One?', duration: '1:01' },
         { title: 'Track Two' , duration: '5:01' },
         { title: 'Track Three', duration: '3:21'},
         { title: 'Track Four', duration: '3:14' },
         { title: 'Track Five', duration: '2:15'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
       +'  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
       +'  <td class="song-item-title">' + songName + '</td>'
       +'  <td class="song-item-duration">' + songLength + '</td>'
       +'</tr>'
      ;

      var $row = $(template);

     var clickHandler = function() {
        var songNumber = $(this).attr('data-song-number');
        
         if (currentlyPlayingSong !== null) {
            
           var currentlyPlayingcell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
             currentlyPlayingcell.html(currentlyPlayingSong);
         }
         if (currentlyPlayingSong !== songNumber) {
            
             $(this).html(pauseButtonTemplate);
             currentlyPlayingSong = songNumber;
        } else if (currentlyPlayingSong === songNumber) {
             
             $(this).html(playButtonTemplate);
             currentlyPlayingSong = null;
         }
     };
     
     var onHover = function(event) {
         var songNumbercElement = $(this).find('.song-item-number');
         var songNumber = songNumbercell.attr('data-song-number');
         
         if (songNumber !== currentlyPlayingSong) {
             songNumberElement.html(playButtonTemplate);
         }
     };
                 
     var offHover = function(event) {
         
         var songNumberElement = $(this).find('.song-item-number');
         var songNumber = songNumberElement.attr('data-song-number');

         if (songNumber !== currentlyPlayingSong) {
            songNumberElement.html(songNumber);
         }
     };
     
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     
     return $row;
  };


    var setCurrentAlbum = function(album) {
  
    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo= $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');
    
    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.text('src', album.albumArtUrl);
  
    $albumSongList.empty();
    
    for (var i = 0; i < album.songs.length; i++) {
      var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration)
      $albumSongList.append($newRow);
    }
};


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

 $(document).ready (function() {
     setCurrentAlbum(albumPicasso);
});
