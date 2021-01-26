function createDiv(id) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('b-tab');
  return div;
}

function menuPage() {
  const content = document.getElementById('content');
  const menuDiv = createDiv('menu-div');
  menuDiv.innerHTML = `
  <div class="row">
    <div class="col-lg-6 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" src="/assets/sourdough.jpg" alt="bread">
        <div class="card-body">
          <h5 class="card-title">Sourdough Bread</h5>
          <p class="card-text">Authentic fresh sourdough bread. Small batch.
            Fermentation process and baking all done in house in rustic cast iron dutch oven.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" src="/assets/sourdough.jpg" alt="bread">
        <div class="card-body">
          <h5 class="card-title">Sourdough Bread</h5>
          <p class="card-text">Authentic fresh sourdough bread. Small batch.
            Fermentation process and baking all done in house in rustic cast iron dutch oven.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" src="/assets/sourdough.jpg" alt="bread">
        <div class="card-body">
          <h5 class="card-title">Sourdough Bread</h5>
          <p class="card-text">Authentic fresh sourdough bread. Small batch.
            Fermentation process and baking all done in house in rustic cast iron dutch oven.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" src="/assets/sourdough.jpg" alt="bread">
        <div class="card-body">
          <h5 class="card-title">Sourdough Bread</h5>
          <p class="card-text">Authentic fresh sourdough bread. Small batch.
            Fermentation process and baking all done in house in rustic cast iron dutch oven.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" src="/assets/sourdough.jpg" alt="bread">
        <div class="card-body">
          <h5 class="card-title">Sourdough Bread</h5>
          <p class="card-text">Authentic fresh sourdough bread. Small batch.
            Fermentation process and baking all done in house in rustic cast iron dutch oven.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" src="/assets/sourdough.jpg" alt="bread">
        <div class="card-body">
          <h5 class="card-title">Sourdough Bread</h5>
          <p class="card-text">Authentic fresh sourdough bread. Small batch.
            Fermentation process and baking all done in house in rustic cast iron dutch oven.
          </p>
        </div>
      </div>
    </div>
  </div>
  `
  content.appendChild(menuDiv);
}

export default menuPage;
