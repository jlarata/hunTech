
# hunTech integration

[About](#About) | [instrucciones para clonar y montar](#instrucciones-para-clonar-y-montar) 

### About:

Se trata del front-end para el proyecto hunTech: una bolsa de trabajo orientada a conectar desarrolladores en formación o recién graduados que buscar hacer sus primeras prácticas en el mercado laboral con proyectos con o sin fines de lucro que estén buscando trabajadores para formar.

Este repositorio contiene el frontEnd en angular, cuya build se hostea en [un bucket s3 de AWS](http://angular-to-aws-s3-test-huntech.s3-website-us-east-1.amazonaws.com)


estado actual (24/10): desarrollando rutas, componentes y servicios con mocks para luego reemplazarlos por contenidos fetcheados de la BBDD.



### instrucciones para clonar y montar: 

1. teniendo instalado npm (podés chequear con con `npm -v` )

2. instalàs globalmente el CLI de anglar     `npm install -g @angular/cli`
(esto te permite correr los comandos ng)

3. podés chequear si tenés instalado el cli de angular con `ng version`

(actualmente arranco este proceso con angular cli 19.0.0 node 22.14.0 npm 11.6.2

4. clonar esta repo y, con una terminal posicionada en la carpeta externa (en la que se llama test_ng_aws) ejecutar npm -i

5. con la terminal posicionada en esa misma carpeta, ng serve --open

