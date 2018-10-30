
  export default {
    state: {
        count: 0,
        detailData: null,
        moveList: []
      },
      mutations: {
        increment (state) {
          state.count++
        },
        updataDetail (state, detail) {
            state.detailData = detail.data;
        },
        updataMoveList: (state, o) => {
            state.moveList = o.data;
        }
      },
      actions: {
        increment (context) {
          context.commit('increment')
        },
        updataDetail (context, detail) {
            context.commit('updataDetail', detail)
        },
        updataMoveList (context, o) {
            context.commit('updataMoveList', o)
        }
      },
      getters: {
          getMoveList: state => {
              return state.moveList;
          },
          getDetailData: state => (id) => {
              return state.moveList.find(item => item.id === id)
          }
      }
  }