import Communication from './lib-communication'
import $ from "jquery/dist/jquery";
import videojs from "video.js";

let Activity = {}

Activity.init = (lectures)=>{
  Activity.iframeLinks = lectures;
  Activity.iframe = $("#iframe");
  Activity.LEVEL = 1
  Activity.setWorkspace(Activity.LEVEL, Activity.iframeLinks.length, false)
}

Activity.loadIframe = (index)=>{
  Activity.iframe.attr("src", Activity.iframeLinks[index].url);
  $("#title").text((index + 1) + " - " + Activity.iframeLinks[index].title);
  Activity.setWorkspace(Activity.LEVEL, Activity.iframeLinks.length, false)
}


Activity.changeLevel = function(value = 1) {
  if (value >= 1 && value <= Activity.MAX_LEVEL) {
    Activity.LEVEL  = value;
    Activity.loadIframe(value - 1);
  }
}

Activity.nextLevel = function() {
  if (Activity.LEVEL < Activity.MAX_LEVEL) {
    Activity.levelFinished()
    Activity.LEVEL++;
    Activity.loadIframe(Activity.LEVEL - 1);

  } else if (Activity.LEVEL === Activity.MAX_LEVEL) {
    Activity.activityFinished()
  } else {
    console.log('something is wrong here')
  }
}

Activity.activityFinished = function() {
  Communication.updateScore(Activity.SCORE)
  Communication.activityFinish()
}

Activity.levelFinished = function() {
  Communication.updateScore(Activity.SCORE)
}

Activity.saveLocalStorage = function() {
  localStorage.setItem(Activity.NAME + '_' + Activity.LEVEL + '_' + Activity.USER_ID, JSON.stringify(localStorageData))
}

Activity.loadLocalStorage = function() {
  return JSON.parse(localStorage.getItem(Activity.NAME + '_' + Activity.LEVEL + '_' + Activity.USER_ID))
}

Activity.resetLocalStorage = function() {
  for (let i = 1; i <= Activity.MAX_LEVEL; i++) {
    localStorage.removeItem(Activity.NAME + '_' + i + '_' + Activity.USER_ID)
  }
  console.log('Local Storage Cleaned!')
  location.reload()
}


Activity.getNumberParamFromUrl = function(name, minValue, maxValue) {
  var val = Number(Activity.getStringParamFromUrl(name, 'NaN'))
  return isNaN(val) ? minValue : Activity.getValueBetween(minValue, val, maxValue)
}

Activity.getStringParamFromUrl = function(name, defaultValue) {
  var val =
    window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}

Activity.getValueBetween = function(minValue, val, maxValue) {
  return val <= maxValue ? val : maxValue
}

Activity.GetURLParameter = function(sParam, defaultValue) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=')

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
    }
  }
}


Activity.setWorkspace = function(currentLevel, maxLevels, hintBtn) {
  Activity.MAX_LEVEL = maxLevels;
  Communication.setupHeader(currentLevel, maxLevels, hintBtn)
}

Activity.loadLanguageFile = function() {
  // $.i18n({ locale: Activity.LANG })
  // $.i18n().load('i18n/' + $.i18n().locale + '.json', $.i18n().locale).done(
  //   function() {
  //     console.log('Language file loaded')
  //   })
}

Activity.setFont = function() {
  if (Activity.LANG === 'ur') {
    window.fontFamily = 'Lateef'
    window.fontSizePadding = 20
  } else {
    window.fontFamily = 'Varela Round'
    window.fontSizePadding = 0
  }
}

Activity.setRtl = function() {
  // $.i18n().locale === 'ur' ? window.rtl = true : window.rtl = false
}

Activity.saveState = function(value) {
  if (!localStorageData.actions.includes(value)) {
    localStorageData.actions.push(value)
  }
  Activity.saveLocalStorage()
}

Activity.resumeGame = function() {
  data = Activity.loadLocalStorage()
  if (data === null) {
    return
  }
  console.log('Local Storage Data Loaded!')

  localStorageData.actions = data.actions
  data.actions.forEach(function(action) {
    eval('Activity.GAME.' + action)
  })
}

Activity.showHelp = function() {
  Activity.GAME.scene.pause()
  Activity.GAME.scene.sendToBack()
  Activity.GAME.scene.launch('Help')
}

Activity.bgMusic = null
Activity.bgMusicMuted = false

Activity.setBgMusic = function(path) {
  Activity.bgMusic = new Audio(path)
  Activity.bgMusic.setAttribute('crossorigin', 'anonymous')
  Activity.bgMusic.addEventListener('ended', function() {
    this.currentTime = 0
    this.play()
  }, false)
}

Activity.playMusic = function() {
  if (Activity.bgMusic === null || Activity.bgMusicMuted)
    return

  Activity.bgMusic.play()
  Activity.setVolume(0.5)
}

Activity.stopMusic = function() {
  if (Activity.bgMusic === null)
    return

  Activity.bgMusic.pause()
  Activity.setVolume(0)
}

Activity.pauseActivity = function() {
  try {
    Activity.GAME.scene.pause()
  } catch (e) {
    //ignore
  }
}

Activity.resumeActivity = function() {
  try {
    Activity.GAME.scene.resume()
  } catch (e) {
    //ignore
  }
}

export default Activity
