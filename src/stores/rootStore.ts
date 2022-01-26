export function rootStore() {
  return {
    data: {
      loading: false,
    },
    setLoading(loading: boolean) {
      this.data.loading = loading
    },
    get loading() {
      return this.data.loading
    },
  }
}

export type RootStore = ReturnType<typeof rootStore>
