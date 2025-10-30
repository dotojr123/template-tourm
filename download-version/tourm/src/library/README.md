# Biblioteca de Componentes Tourm

Esta biblioteca contém uma coleção de componentes e layouts de página reutilizáveis, projetados para acelerar o desenvolvimento de novos projetos. A principal filosofia por trás desta biblioteca é a separação clara entre a lógica da interface (componentes) e os dados (conteúdo).

## Padrões de Desenvolvimento

Para garantir a consistência e a reutilização, todos os componentes e páginas nesta biblioteca devem seguir os seguintes padrões:

### 1. Conteúdo via Props

Os componentes não devem ter conteúdo fixo (textos, imagens, etc.). Em vez disso, todo o conteúdo deve ser passado através de `props`. Isso permite que os componentes sejam flexíveis e facilmente adaptáveis a diferentes contextos.

**Exemplo:**

```jsx
// Mau:
function Banner() {
    return <h1>Título Fixo</h1>;
}

// Bom:
function Banner({ title }) {
    return <h1>{title}</h1>;
}
```

### 2. Estilos Isolados com CSS Modules

Para evitar conflitos de estilo com os projetos onde os componentes serão usados, todos os estilos devem ser isolados usando **CSS Modules**. Cada componente deve ter seu próprio arquivo `.module.css`.

**Exemplo:**

1.  Crie um arquivo `Banner.module.css`:
    ```css
    .bannerTitle {
        color: blue;
    }
    ```

2.  Importe e use os estilos no seu componente:
    ```jsx
    import styles from './Banner.module.css';

    function Banner({ title }) {
        return <h1 className={styles.bannerTitle}>{title}</h1>;
    }
    ```

### 3. Documentação com JSDoc

Cada componente deve incluir uma documentação clara (usando comentários JSDoc) que explique seu propósito e as `props` que ele aceita.

## Como Adicionar Novos Componentes

1.  **Crie a Pasta do Componente:** Crie uma nova pasta para o seu componente em `src/library/components/` (ou `src/library/pages/` para layouts de página).

2.  **Crie os Arquivos:** Dentro da pasta, crie o arquivo do componente (ex: `Card.jsx`) e o arquivo de estilos do módulo (ex: `Card.module.css`).

3.  **Desenvolva o Componente:** Siga os padrões de desenvolvimento descritos acima (conteúdo via props, CSS Modules, JSDoc).

4.  **Exporte o Componente:** Exporte o componente para que ele possa ser usado em outras partes da aplicação.

Seguindo esses padrões, podemos construir uma biblioteca de componentes robusta, flexível e fácil de manter.