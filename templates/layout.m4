<!doctype html>
<html lang='en-ca'>

<head>
<meta charset='utf-8' />

<!-- tab appearance -->
<title>Levi Williamson</title>
<link rel='icon' href='/assets/images/favicon.svg' />

<!-- web crawlers -->
<link rel='canonical' href='https://LeviMWilliamson.github.io'/>
<meta name='robots' content='index, follow'/>

<!-- search engines -->
<meta name='description' content="Levi Williamson's personal website, portfolio, and blog!"/>

<!-- layout -->
<meta name='viewport' content='width=device-width, initial-scale=1' />
<link rel='stylesheet' href='/assets/stylesheets/layout.css' />
<link rel='stylesheet' href='/assets/stylesheets/header.css' />
<link rel='stylesheet' href='/assets/stylesheets/content.css' />
<link rel='stylesheet' href='/assets/stylesheets/footer.css' />
</head>

<body>

<!-- screen readers -->
<div><a id='skip-link' href='#content'>Skip to main content.</a></div>

<!-- branding, navigation -->
include(templates/partials/header.m4)

<!-- page-unique content -->
include(CONTENT)

<!-- contact info, copyright -->
include(templates/partials/footer.m4)
</body>
</html>