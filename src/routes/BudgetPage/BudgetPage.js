import React, {Component} from 'react'
import './BudgetPage.css'
import budget_categories from '../../STORE/budget_categories'
import budget_items from '../../STORE/budget_items'

export default class BudgetPage extends Component{

  componentDidMount(){
    console.log(budget_categories)
  }

  renderCategories=()=>{

    let categories = budget_categories.map((category,index)=>{
      return(
        <div style={{border:'1px solid red',margin:'10px'}} key={index}>
          <p style={{backgroundColor:'black',color:'white'}}>{category.category}</p>
          {this.renderItems(category.id)}
        </div>
      )
    })

    return categories
  }

  renderItems=(categoryId)=>{
    
    let items = budget_items.map((item,index)=>{
      if(item.category_id===categoryId){
        return(
          <div style={{display:'flex'}}>
            <p>{item.item}</p>
            <p>{item.budgeted_amt.toFixed(2)}</p>
            <p>{item.spent_amt.toFixed(2)}</p>
          </div>
          
        )
      }
    })

    return items
  }

  render(){
    return (
        <section>
            <h2>Let's Budget!</h2>
            {this.renderCategories()}
        </section>
    )
  }
  
}