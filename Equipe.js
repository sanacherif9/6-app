import React,{Component} from "react";

class Equipe extends Component{
 render(props){
   let photo1={};
  if (this.props.gender === 'male'){ photo1 ={border: '3px  solid  blue ' }}
  else if (this.props.gender === 'female') { photo1={ border: '3px  solid  yellow '}}
   return(
       <div className="Instrutor">
         <img src={this.props.photo} style={photo1} alt=""/>
         <div className="nom" >
              <h2 className="fname" >{this.props.fname}</h2>
              <h2 className="sname" >{this.props.sname}</h2>
              
          </div>
          <h2 className="job">{this.props.job}</h2>
          <h2 className="job">{this.props.statut}</h2>
        </div>
   );

 }





}
export  default Equipe;