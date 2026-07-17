function ResultCard({result}){


return(

<div>


<h2>

Best Model

</h2>


<h3>

{result.best_model}

</h3>



<h2>

Accuracy

</h2>


<h3>

{result.best_accuracy} %

</h3>


</div>

);


}


export default ResultCard;