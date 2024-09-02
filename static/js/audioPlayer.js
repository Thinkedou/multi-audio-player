export const audioPlayer = {
    playerInstance: null,
    playBtnInstance:null,
    pauseBtnInstance:null,
    audioFiles:null,
    progressionInstance:null,
    progressionDatas:{
        currentTime:null,
        duration:null,
        progressionRange:0
    },

    init:function(audioElement){
        this.playerInstance = audioElement
        this.setPlayerControls()
        this.setControlsEvents()
        
    },
    setPlayerControls:function(){
        this.playBtnInstance  = this.playerInstance.nextElementSibling.querySelector('.playBtn')
        this.pauseBtnInstance = this.playerInstance.nextElementSibling.querySelector('.pauseBtn')
        this.progressionInstance = this.playerInstance.nextElementSibling.querySelector('.progression')
    },
    setControlsEvents:function(){
        this.playBtnInstance.addEventListener('click',()=>{this.play()})    
        this.pauseBtnInstance.addEventListener('click',()=>{this.pause()})
        this.playerInstance.addEventListener('loadedmetadata',()=>{
            this.progressionDatas.duration = this.playerInstance.duration
            this.setProgressionValues()
        });


        this.playerInstance.addEventListener('timeupdate',()=>{this.progressionTracker()})
    },
    setProgressionValues:function(){
        this.progressionInstance.querySelector('#duration').textContent = this.secondsToTime(this.progressionDatas.duration)
    },

    play:function(){
        this.playerInstance.play()
        if(this.playerInstance){
            this.playerInstance.play()
        }
    },
    pause:function(){
        if(this.playerInstance){
            this.playerInstance.pause()
        }
    },
    progressionTracker:function(){
        const progress = this.playerInstance.currentTime
        const duration = this.playerInstance.duration
        console.log(progress/duration)
    },
    secondsToTime:function(e){
        const h = Math.floor(e / 3600).toString().padStart(2,'0'),
              m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
              s = Math.floor(e % 60).toString().padStart(2,'0');
        
        return h + ':' + m + ':' + s;
        //return `${h}:${m}:${s}`;
    }

}

