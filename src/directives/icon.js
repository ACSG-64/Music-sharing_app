export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} text-xl`;
    if (binding.arg === 'full') {
      iconClass = binding.value;
    }

    if (!binding.modifiers.left) {
      iconClass += ' float-right';
    }

    if (binding.modifiers.blue) {
      iconClass += ' text-blue-600';
    } else {
      iconClass += ' text-green-400';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
