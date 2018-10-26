import { Vector } from 'tstl/container'
import { WebServer } from 'tgrid/protocol/web'

(() : void => {

    const server = new WebServer()

    server.open(10101, async acceptor => {

        await acceptor.accept()
        await acceptor.listen(new Vector<number>())
    })

})()