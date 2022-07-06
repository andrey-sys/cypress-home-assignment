
//function for the verification if the tab is opened(clicked) or not
function selectGroupMenuItem(tabName){
    cy.contains('a',tabName).then(menu =>{
        cy.wrap(menu).find('.classes....').invoke('attr', 'data-name').then(attr =>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

//class for navigation to each page
export class navigationPage{

    mediaLibraryPage(){
        //selectGroupMenuItem('Media Library')
        cy.contains('Media Library').click()
    }

}

//instance of the class
export const navigateTo = new navigationPage()