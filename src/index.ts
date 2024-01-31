/*
 * @Author: liangshuo liangshuoone@aliyun.com
 * @Date: 2024-01-31 18:19:57
 * @Description: Analyize
 * @LastEditTime: 2024-01-31 18:30:39
 * @LastEditors: liangshuo liangshuoone@aliyun.com
 */

type Config = {
    base_url: string
}
class Analayze {
    /** Burial Point Address  */
    protected base_url: string


    constructor(config: Config) {
        this.base_url = config.base_url

        this.start_sa()
    }

    // Start Burial
    public start_sa() {
        this.gatherLoadData()
    }

    // Burial Load
    public gatherLoadData() {
        window.addEventListener('load', () => {
            const pageUrl = window.location.href;
            const timeStamp = new Date().getTime()
            const userData = {
                eventType: 'pageView',
                pageUrl,
                timeStamp
            }
            this.sendData(userData)
        })
    }

    public sendData(data: any) {
        console.log('sendData', data)
    }

}


export default Analayze;