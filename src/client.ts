import { Vector } from 'tstl/container'
import { WebConnector } from 'tgrid/protocol/web'

async function main() : Promise<void> {

    const connector = new WebConnector()

    await connector.connect('ws://127.0.0.1:10101')
    await connector.wait()

    const v = connector.getDriver<Vector<number>>()

    for (let i : number = 0; i < 5; ++i) await v.push_back(i)

    console.log('size:', await v.size())

    for (let i : number = 0; i < await v.size(); ++i) console.log('  element:', await v.at(i))

    await connector.close()

}

main()