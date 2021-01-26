function createDiv(id) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('b-tab');
  return div;
}

function contactPage() {
  const content = document.getElementById('content');
  const contactDiv = createDiv('contact-div');
  contactDiv.classList.add('form-ctn');
  contactDiv.innerHTML = `
  <div class="col-md-9 mb-md-0 mb-5">
  <h1 class="text-center"> Send us an email and we will get back to you.</h1>
  <h5 class="text-center"> *please note this contact form is a demo no information will be sent.</h5>
    <form id="contact-form" name="contact-form" action="..." method="POST" onsubmit="...">
        <div class="row">
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control">
                    <label for="name" class="">Your name</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control">
                    <label for="email" class="">Your email</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control">
                    <label for="subject" class="">Subject</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">

                <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="7" class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                </div>

            </div>
        </div>
    </form>
    <div class="text-md-left">
      <a class="btn btn-primary" onclick="....">Send</a>
    </div>
    <div class="status" id="status"></div>
</div>`
  content.appendChild(contactDiv);
}

export default contactPage;
