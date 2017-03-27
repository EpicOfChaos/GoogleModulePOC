import {expect} from 'chai'
import {GoogleScraper} from './google.scraper'

describe('GoogleScraper', () => {
    let doSomethingMachine: GoogleScraper
    beforeEach(( )=> {
        doSomethingMachine = new GoogleScraper()
    })
    describe('#doIt',() => {
        it('should return "Oh Yeah"', () => {
            expect(doSomethingMachine.doIt()).to.eql("Oh Yeah")
        })
    })
})