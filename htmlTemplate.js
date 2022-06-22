function buildStandalone(contents) {
	return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <title>Financial Insights</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
      @font-face {
        font-family: HurmeGeometricSans4-Regular;
        src: url("./font/HurmeGeometricSans4\ Light.otf") format("opentype");
      }

      @font-face {
        font-family: HurmeGeometricSans4-SemiBold;
        src: url("./font/HurmeGeometricSans4\ SemiBold.otf") format("opentype");
      }

      @font-face {
        font-family: HurmeGeometricSans4-Bold;
        src: url("./font/HurmeGeometricSans4\ Bold.otf") format("opentype");
      }

      body {
        font-family: HurmeGeometricSans4-Regular,Arial,Helvetica,sans-serif;
        background-color: #e6e7e8;
        position: relative;
        word-wrap: break-word;

        font-size: 16px;
        line-height: 20px;
        color: #000;
      }

      .root-col {
        padding: 10px 20px;
      }

      .header h2 {
        font-size: 28px;
        margin-bottom: 1em!important;
        font-weight: 500;
        margin-top: 0;
        color: #58595b;
        font-family: HurmeGeometricSans4-Bold,Arial,Helvetica,sans-serif;
        line-height: 1em;
      }

      .sub-row > div {
        padding-top: 10px 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .card {
        width: 100%;
        height: 100%;
        position: relative;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border: solid 1px transparent;
        cursor: pointer;
        border-radius: 0;
      }

      .card:hover {
        border: solid 1px #006daf;
      }

      .card .image {
        height: 250px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .card .box {
        padding: 20px;
      }

      .card .box .category {
        font-family: HurmeGeometricSans3-SemiBold,Arial,Helvetica,sans-serif;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #6e6e6e;
        font-size: 12px;
      }

      .card .box .title {
        font-family: HurmeGeometricSans4-SemiBold,Arial,Helvetica,sans-serif;
        font-size: 18px;
        line-height: 1.3em;
        margin-bottom: 0;
        font-weight: 500;
        margin-top: 0;
      }

      .card .box .title a {
        cursor: pointer;
        color: #006daf;
        border-bottom: 1px solid #c7c8c7;
        font-family: HurmeGeometricSans4-SemiBold,Arial,Helvetica,sans-serif;
        text-decoration: none;
        background-color: transparent;
      }

      .card .box p {
        color: #000;
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 16px;
      }

      .root-col section {
        box-shadow: 0 4px 16px rgb(0 0 0 / 15%);
        height: 100%;
        background: white;
        padding: 20px;
      }

      
    </style>
  </head>

  <body>
    <div class="row root-row">
      <div class="col-12 root-col">
        <section>
          <div class="header">
            <h2>
              Financial Insights
            </h2>
          </div>
          <div class="row sub-row">
          ${
            contents.map(c => {
              return `
              <div class="col-12 col-md-4">
                <div class="card" onclick="window.open('${c.href}', '_blank');">
                  <div 
                    class="image"
                    style="background-image: url('${'https://www.securian.com' + c.img}'); background-position: 50% 50%;">
                  </div>
                  <div class="box">
                    <div class="category">${c.brief}</div>
                    <h3 class="title">
                      <a
                        href="${c.href}">
                        ${c.title}
                      </a>
                    </h3>
                    <p>
                      ${c.content}
                    </p>
                  </div>
                </div>
              </div>
              `;
            }).join("")
          }
          </div>
        </section>
      </div>
    </div>
  </body>
  </html>
  `;
}

module.exports = (contents) => buildStandalone(contents)