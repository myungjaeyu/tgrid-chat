import IExam from './IExam'

export default class Exam implements IExam {

	public send(text : String) : String {

		return 'Hi, ' + text

	}

}