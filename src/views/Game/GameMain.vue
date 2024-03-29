<script lang="ts" setup>
import GameInformation from '@/views/Component/GameInformation.vue'
import ComputedCard from '@/views/Component/ComputedCard.vue'
import PlayerCard from '@/views/Component/PlayerCard.vue'
import GameMenu from '@/views/Component/GameMenu.vue'
import CheckCard from '@/views/Component/CheckCard.vue'
import DropCard from '@/views/Component/DropCard.vue';
import type { CardItem, LogItem, GameStatus } from '@/views/Type'
import { getRandomNumber, deepClone, nextRounds } from '@/utils'

// 全局信息变量
const state = useGlobalState()
// 游戏信息Ref
const showGameMenuRef = ref<InstanceType<typeof GameMenu>>(null)
// 玩家角色
const playerRole = computed(() => state.value.playerRole)
// 玩家当前打出的卡片信息
const playerCardInfo: Ref<CardItem> | null = ref()
// 电脑当前打出的卡片信息
const computerCardInfo: Ref<CardItem> | null = ref()

/**
 * 进行检查
 * 检查规则是去除玩家和电脑选中的卡牌
 * @param cardInfo 卡牌信息
 */
const playerCardCheck = (cardInfo: CardItem): void => {
  // 正在展示信息 就拒绝检查
  if (showGameMenuRef.value.show) {
    return;
  }
  if (playerCardInfo.value) {
    state.value.dropedCardItems.push(playerCardInfo.value, computerCardInfo.value);
  }
  // 玩家操作
  const copyPlayerCardInfo = deepClone(cardInfo)
  playerCardInfo.value = copyPlayerCardInfo
  state.value.playerCardItems = state.value.playerCardItems.filter(card => card.sort !== copyPlayerCardInfo.sort);
  // 电脑操作（随机出牌）
  const sort = getRandomNumber(state.value.computerCardItems.length);
  const copyComputerCardInfo = deepClone(state.value.computerCardItems[sort])
  computerCardInfo.value = copyComputerCardInfo;
  state.value.computerCardItems = state.value.computerCardItems.filter(card => card.sort !== copyComputerCardInfo.sort)

  // 延时1秒比对
  setTimeout(() => {
    checkedCard(copyPlayerCardInfo, copyComputerCardInfo)
  }, 1000)
}

/**
 * 判断游戏结果
 * @param playerCard  玩家卡牌信息
 * @param computerCard  电脑卡牌信息
 */
const judgeRoundWinner = (playerCard: CardItem, computerCard: CardItem): LogItem => {
  const results = {
    emperor: { emperor: null, citizen: 'win', slave: 'lose' },
    citizen: { emperor: 'lose', citizen: null, slave: 'win' },
    slave: { emperor: 'win', citizen: 'lose', slave: null },
  };
  const result = results[playerCard.role][computerCard.role];
  const logItem: LogItem = {
    round: state.value.rounds,
    role: playerRole.value,
    result: result,
    sort: playerCard.sort,
    playerScore: result === 'win' ? 1 : 0,
    computerScore: result === 'win' ? 0 : 1,
  };
  return logItem;
}

/**
 * 检查卡牌
 * @param playerCard  玩家卡牌信息
 * @param computerCard  电脑卡牌信息
 */
const checkedCard = (playerCard: CardItem, computerCard: CardItem): void => {
  setTimeout(() => {
    computerCardInfo.value.isBack = false
    playerCardInfo.value.isBack = false
  }, 1000)

  setTimeout(() => {
    computerCardInfo.value = null
    playerCardInfo.value = null
    if (playerCard.role === computerCard.role) {
      // 平局
      state.value.dropedCardItems.push(playerCard, computerCard);
    } else {
      const logItem = judgeRoundWinner(playerCard, computerCard)
      state.value.gameLogItems.push(logItem)
      // 对局结束，进行下一局，记分
      nextRounds();
      showGameMenuRef.value.reshow();
    }
  }, 2000)
}

watch(
  () => state.value.gameState,
  (gameState: GameStatus) => {
    if (['init', 'win', 'lose'].includes(gameState)) {
      state.value.rounds = 1
      state.value.dropedCardItems = []
      state.value.gameLogItems = []
    }
  }
)
</script>

<template>
  <GameMenu ref="showGameMenuRef" />
  <transition>
    <div h-full w-screen grid="~" :class="[state.isShowGameInfo ? 'grid-cols-5' : 'grid-cols-1']">
      <div grid="~ rows-4" col-span-3 h-full w-full>
        <div w-full bg-gray:50 flex-center>
          <!-- 电脑手牌区域 -->
          <ComputedCard />
        </div>
        <div bg-gray:50 flex-center>
          <!-- 电脑检查区域 -->
          <CheckCard :card-info="[computerCardInfo]" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <!-- 玩家检查区域 -->
          <CheckCard :card-info="[playerCardInfo]" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <!-- 玩家手牌区域 -->
          <PlayerCard @card-check="playerCardCheck" />
        </div>
      </div>

      <div v-show="state.isShowGameInfo" grid="~ rows-4" col-span-2 h-full w-full>
        <div h-full w-full bg-gray:80 flex-center row-span-3>
          <!-- 电脑对局信息区域 -->
          <GameInformation />
        </div>
        <div w-full bg-gray:80 flex-center row-span-1>
          <!-- 电脑弃牌区域 -->
          <DropCard />
        </div>
      </div>
    </div>
  </transition>
</template>

