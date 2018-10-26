import { WebConnector } from 'tgrid/protocol/web'
import { Driver } from 'tgrid/base'

import IExam from './internal/IExam'

async function main() : Promise<void> {

    const connector = new WebConnector()

    await connector.connect('ws://127.0.0.1:10101')
    await connector.wait()

    const exam : Driver<IExam> = connector.getDriver<IExam>()

    console.log(await exam.send('u4bi'))

    await connector.close()

}

main()