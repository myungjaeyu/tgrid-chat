import { Vector } from 'tstl/container'
import { WebServer } from 'tgrid/protocol/web'

async function main() : Promise<void> {

    const server = new WebServer()

    server.open(10101, async acceptor => {

        await acceptor.accept()
        await acceptor.listen(new Vector<number>())
    })

}

main().then(_ => console.log('🚀  Started'))