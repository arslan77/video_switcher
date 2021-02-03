import Activity from './lib-activity'

let Communication = {}

Communication = {
    origins: [
        'http://127.0.0.1:8000',
        'http://storage.googleapis.com',
        'https://storage.googleapis.com',
        'http://demo.robotwala.org',
        'https://demo.robotwala.org',
        'http://latest.robotwala.org',
        'https://latest.robotwala.org',
        'http://www.robotwala.app',
        'https://www.robotwala.app',
        'http://robotwala.app',
        'https://robotwala.app',
        'https://storage.robotwala.app/',
        'https://school.robotwala.app/',
        'https://school.robotwala.app'
    ],

    init: () => {
        window.addEventListener('message', Communication.receiveMessage)
    },
    sendMessage: (dict = {}) => {
        let parent_win = window.parent
        parent_win.postMessage(dict, '*')
    },
    receiveMessage: (event) => {
        if (!Communication.origins.includes(event.origin)) {
            console.log('IFRAME - Discarding Message Event as it is not from trusted origin')
            console.log(event)
            return null
        } else {
            console.log('IFRAME - Recieved Message from Trusted Origin')
            console.log(event.data)
            let data = event.data
            if (typeof data === 'object') {
                switch (data.type) {
                    case 'change_level':
                        Communication.ReceivedChangeLevel(data.value)
                        break
                    case 'next_level':
                        ReceivedNextLevel()
                        break
                    case 'previous_level':
                        ReceivedPreviousLevel()
                        break
                    case 'show_hint':
                        Communication.ReceivedShowHint()
                        break

                    case 'reset_cache':
                        Communication.ResetCache()
                        break
                    case 'play_music':
                        Activity.playMusic()
                        break
                    case 'stop_music':
                        Activity.stopMusic()
                        break
                    case 'pause_activity':
                        Activity.pauseActivity()
                        break
                    case 'resume_activity':
                        Activity.resumeActivity()
                        break
                    default:
                        console.log(event)
                        break
                }
            } else {
                console.log(event)
            }
        }
    }
}

Communication.init()


/*----------Send-messages-start----------*/

Communication.updateScore = (score) => {
    let dict = {
        type: 'score_update',
        value: score
    }
    Communication.sendMessage(dict)
}

Communication.levelChange = (level) => {
    let dict = {
        type: 'level_change',
        value: level
    }
    Communication.sendMessage(dict)
}

Communication.activityFinish = () => {
    let dict = {
        type: 'activity_finish'
    }
    Communication.sendMessage(dict)
}

Communication.setupHeader = (current_level, max_level, show_hint_btn) => {
    Communication.sendMessage({
        type: 'setup_header_max_level',
        value: max_level
    })
    Communication.sendMessage({
        type: 'setup_header_current_level',
        value: current_level
    })

    Communication.sendMessage({
        type: 'setup_show_hint_btn',
        value: show_hint_btn
    })
}

/*----------Send-messages-end----------*/

/*----------Received-messages-start----------*/

Communication.ReceivedChangeLevel = (value) => {
    Activity.changeLevel(value)
}

Communication.ReceivedShowHint = function () {
    Activity.showHelp()
}

Communication.ResetCache = function () {
    Activity.resetLocalStorage()
}

/*----------Received-messages-end----------*/

export default Communication
