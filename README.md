# Elemental

**Elemental** es un proyecto de eCommerce dedicado a la venta de elementos hechos de cerámica. La aplicación permite a los usuarios explorar un catálogo de productos, añadirlos a un carrito y realizar compras. Los datos de productos y las órdenes se almacenan en Firestore.

## Flujo del Proyecto

1. **Página de Inicio**: Los usuarios ingresan a la página principal donde se visualiza la marca del proyecto 
2. **Navegación**:
   - **Barra de Navegación**: Permite acceder a un listado completo de productos y a un submenú para seleccionar categorías específicas.
3. **Listado de Productos**: Desde la vista general, los usuarios pueden hacer clic en cada producto para acceder a su vista detallada.
4. **Vista Detallada del Producto**: 
   - Los usuarios pueden seleccionar la cantidad deseada y agregar el producto al carrito de compras.
5. **Carrito de Compras**:
   - En esta vista, los usuarios pueden modificar la cantidad de cada producto, eliminar un artículo específico o vaciar el carrito completo.
6. **Finalización de la Compra**:
   - Una vez que los usuarios deciden completar la compra, se les solicita que completen un formulario con sus datos. 
   - Al presionar el botón de finalizar la compra, se limpia el formulario y se vacía el carrito, redireccionando a los usuarios de vuelta al listado de productos.

## Características

- Listado de productos cargados en Firestore.
- Carrito de compras con funcionalidad completa.
- Notificaciones en pantalla para acciones del usuario.
- Navegación fluida utilizando React Router.

## Tecnologías Utilizadas

Este proyecto se desarrolló utilizando las siguientes tecnologías y dependencias:

### Dependencias

- **firebase**: ^10.14.0  
  Utilizada para gestionar la base de datos en tiempo real y almacenar productos y órdenes.

- **overlayscrollbars**: ^2.10.0  
  Biblioteca para mejorar el comportamiento de los scrolls en la aplicación, ofreciendo un estilo personalizado.

- **overlayscrollbars-react**: ^0.5.6  
  Adaptación de OverlayScrollbars para utilizar en proyectos de React, facilitando su integración.

- **react**: ^18.3.1  
  Librería principal para construir interfaces de usuario.

- **react-dom**: ^18.3.1  
  Proporciona métodos específicos para trabajar con el DOM de la aplicación React.

- **react-router-dom**: ^6.26.1  
  Biblioteca para el enrutamiento en aplicaciones React, permitiendo la navegación entre diferentes vistas.

- **sonner**: ^1.5.0  
  Usada para mostrar notificaciones en pantalla en itemdetail, mejorando la experiencia del usuario.

- **styled-components**: ^6.1.12  
  Permite utilizar estilos en componentes React de forma modular y dinámica, facilitando la personalización del diseño.

- **Imagenes**:
Las imagenes fueron creadas con IA y alojadas en imgur. 
