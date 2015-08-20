# Using Ember 2.X

Example Application of Future Ember Features

By Alex LaFroscia -- @alexlafroscia

---

# Routable Components

----

# Old Style

- Routable Controllers decorate models
- Need a template or view

----

# New Style

- No more controllers
- Route to a Component, which is already decoration + DOM

----

# Why do I want this?

- Consolidate all long-running state

---

# Pod Structure

----

# Old Style

- Files are organized by type, and then name

----

# New Style

- File are organized by name, and then type

----

# Why do I want this?

- Easier project organization
- [ember-component-css](https://github.com/ebryn/ember-component-css)

---

# Closure Actions

----

# Old Style

- Actions are passed into a component as a string
- Actions are invoked in a component using `sendAction`

```hbs
// Template
{{some-component onClickAction='doSomeThing'}}
```

```js
// Component
export default Component.extend({
  onClickAction: '',

  click() {
    const action = this.get('onClickAction');
    this.sendAction(action);
  }
});
```

----

# New Style

- Actions are passed into a component using the `action` helper
- Actions are invoked as proper functions

```hbs
// Template
{{some-component onClickAction=(action 'doSomeThing')}}
```

```js
// Component
export default Component.extend({
  click() {
    this.attrs.onClickAction();
  }
});
```

----

# Why do I want this?

- Actions can have real return values
- Easier to pass actions down through component hierarchy

---

# Angle-Bracket Components

----

# Old Style

- Components use Handlebars syntax
- Arguments passed in are mutable

```hbs
// Inline Form
{{some-component foo=bar}}

// Block Form
{{#some-component foo=bar}}

{{/some-component}}
```

----

# New Style

- Components use HTML syntax
- Arguments passed in are immutable by default

```html
// Inline Form
<some-component foo={{bar}} />

// Block Form
<some-component foo={{bar}}>

</some-component>
```

----

# Why do I want this?

- Easier to implement "Data Down, Actions Up"


---

# Want to Read More?

- [Data Down, Actions Up](http://www.samselikoff.com/blog/data-down-actions-up/)
- [Active Angle Bracket Component RFC](https://github.com/emberjs/rfcs/pull/60)
- [Closure Actions](http://alexdiliberto.com/posts/ember-closure-actions/)

---

# Want slides?

To view slides, view this file with [reveal-md](https://github.com/webpro/reveal-md)
