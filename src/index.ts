/*
 * @Author: liangshuo liangshuoone@aliyun.com
 * @Date: 2024-01-31 18:19:57
 * @Description: Analyize
 * @LastEditTime: 2024-02-01 17:29:01
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 */
declare interface Window {
    Analayze: typeof Analayze
}

type Config = {
    base_url: string
    rest_data?: Record<string, unknown>
}

class Analayze {
    /** Burial Point Address  */
    protected base_url: string
    protected rest_data: Record<string, unknown>

    constructor(config: Config) {
        this.base_url = config.base_url
        this.rest_data = config.rest_data || {}
        this.startGather()
    }

    // Start Burial
    public startGather() {
        this.gatherLoadData()
        this.gatherClick()
    }

    public generateBaseData() {
        const pageUrl = window.location.href;
        const timeStamp = new Date().getTime();

        return {
            pageUrl,
            timeStamp
        }
    }


    // Burial Load
    public gatherLoadData() {
        window.addEventListener('load', () => {

            const userData = {
                ...this.rest_data,
                eventType: 'pageView',
                ...this.generateBaseData()
            }
            this.sendData(userData)
        })
    }

    // Burial Click
    public gatherClick() {
        window.addEventListener('click', (e) => {
            const userData = {
                ...this.rest_data,
                eventType: 'click',
                ...this.generateBaseData(),
                position: {
                    pageX: e.pageX,
                    pageY: e.pageY
                }
            }
            console.log(e, 'e')
            this.sendData(userData)
        })
    }


    public sendData(data: any) {
        // const xhr = new XMLHttpRequest()
        console.log('sendData', data)
    }

}

window.Analayze = Analayze