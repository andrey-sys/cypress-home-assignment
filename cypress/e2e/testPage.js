import { mediaLibraryPage, onMediaLibraryPage } from "../support/pageObjects/mediaLibraryPage"
import { navigateTo } from "../support/pageObjects/navigationPage"


//suite for assingment
describe('Suite for assignments tests', () =>{
    //open the login page before each test
    beforeEach('navigate to the site',() =>{
        //navigation to the login page
        cy.visit('/users/login')

    })

    //test: contains basic actions
    it('Test assignment', ()=>{

        cy.login('andrewscottt@gmail.com','Michael2012$')
        navigateTo.mediaLibraryPage()
        onMediaLibraryPage.provideRightClickOn('cld-sample-4')
        onMediaLibraryPage.clickListOption('Manage')
        onMediaLibraryPage.verifyText('cld-sample-4')


    })

})