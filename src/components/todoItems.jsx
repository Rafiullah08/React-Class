function TodoItems(){

let itme1 = "This is my first aitems"
let itme2 = 10/12/2024

  return (
    <>
<div class="container text-center mt-3">
  <div class="row justify-content-md-center">
    <div class="col col-md-4">
    {itme1}
    </div>
    <div class="col-md-4">
      {itme2}
    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  
</div>
<div class="container text-center mt-3">
  <div class="row justify-content-md-center">
    <div class="col col-md-4">
    This is my 2nd aitems
    </div>
    <div class="col-md-4">
      10/12/2024
    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  
</div>

    </>
  )
}

export  default TodoItems;