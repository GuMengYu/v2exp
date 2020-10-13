<template>
  <v-snackbar
    v-model="visible"
    :timeout="timeout"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :top="y === 'top'"
    :vertical="mode === 'vertical'"
    :color="color || typeColor"
    text
  >
    <v-icon
      v-if="iconClass"
      small
      class="mr-2"
    >
      {{ `mdi-${color.icon}` }}
    </v-icon>
    <v-icon
      v-else
      small
      class="mr-2"
    >
      {{ typeIcon }}
    </v-icon>
    <slot>
      <template v-if="!dangerouslyUseHTMLString">
        {{ message }}
      </template>
      <template v-else>
        {{ message }}
      </template>
    </slot>
    <template
      v-if="showClose"
      v-slot:action="{ attrs }"
    >
      <v-icon
        v-bind="attrs"
        @click="close"
      >
        mdi-close
      </v-icon>
    </template>
  </v-snackbar>
</template>

<script>
const typeMap = {
    'success': 'check',
    'info': 'information',
    'error': 'alert',
    'warning': 'car-brake-alert',
};
const typeColorMap = {
    'success': 'success',
    'info': 'info',
    'error': 'error',
    'warning': 'warning',
};
export default {
  name: 'MSnackBar',
  data: () => ({
    visible: false,
    closed: false,
    message: '',
    timeout: 5000,
    onClose: null,
    x: 'center',
    y: 'top',
    mode: '',
    iconClass: '',
    type: '',
    dangerouslyUseHTMLString: false,
    showClose: false,
    color: '',
  }),
  computed: {
    typeIcon() {
        return this.type && !this.iconClass ? `mdi-${typeMap[this.type]}` : '';
    },
    typeColor() {
        return this.type && !this.color ? typeColorMap[this.type] : '';
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        // this.$el.addEventListener("transitionend", this.destroyElement);
      }
    },
  },
  mounted() {},
  methods: {
      close() {
          this.closed = true;
          if(typeof this.onClose === 'function') {
              this.onClose(this);
          }
      },
  },
};
</script>