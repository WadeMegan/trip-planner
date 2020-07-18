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
        <div key={index}>
          <p style={{backgroundColor:'black',color:'white'}}>{category.category}</p>
          <table>
            <thead>
              <tr className="tr-border">
                <th>Item</th>
                <th>Budgeted Amount</th>
                <th>Actual Amount</th>
              </tr>
            </thead>
            <tbody>
                {this.renderItems(category.id)}
            </tbody>
          </table>
        </div>
      )
    })

    return categories
  }

  renderItems=(categoryId)=>{
    
    let items = budget_items.map((item,index)=>{
      if(item.category_id===categoryId){
        return(
          <tr key={index}>
              <td>{item.item}</td>
              <td>{item.budgeted_amt.toFixed(2)}</td>
              <td>{item.spent_amt.toFixed(2)}</td>
          </tr>          
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