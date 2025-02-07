/* 
step1 -> Chart as ChartJs,ArcElement,(Line,Bar)Element,Tooltip,Legend,CategoryScale(x-axis),LinearScale(Y axis).
step2 -> ChartJS.register(options).
steps3 -> {
  -> Either create state and setData with data ,
  -> const data = {labels:[],[{label:"",data:[],backgroundColor:[],borderColor:[],borderWidth:1}]}
}
step4 ->  options : {
  responsive: true,
  plugins:{
      legend:{display:true, position:"bottom"},
      tooltip: {enabled : true},
  },
};
*/
