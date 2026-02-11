<script setup lang="ts">
interface Activity {
  title: string
  team: string
  type: string
  date: string
  link: string
}

interface GroupedActivities {
  label: string
  activities: Activity[]
}

const props = defineProps<{
  limit?: number
}>()

const { data: activities, status } = useFetch<Activity[]>('/api/activities')

const gameIcons: Record<string, string> = {
  'Fortnite': '🎯',
  'Minecraft': '⛏️',
  'Counter-Strike': '🔫',
}

function formatTime(dateStr: string): string {
  return new Date(dateStr).toLocaleTimeString('da-DK', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatDateLabel(dateStr: string): string {
  const date = new Date(dateStr)
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  if (date.toDateString() === today.toDateString()) return 'I dag'
  if (date.toDateString() === tomorrow.toDateString()) return 'I morgen'

  return date.toLocaleDateString('da-DK', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

const grouped = computed<GroupedActivities[]>(() => {
  if (!activities.value) return []

  const items = props.limit ? activities.value.slice(0, props.limit) : activities.value
  const groups: Record<string, Activity[]> = {}

  for (const activity of items) {
    const label = formatDateLabel(activity.date)
    if (!groups[label]) groups[label] = []
    groups[label].push(activity)
  }

  return Object.entries(groups).map(([label, acts]) => ({ label, activities: acts }))
})
</script>

<template>
  <div class="activity-calendar">
    <div v-if="status === 'pending'" class="activity-loading">
      Indlæser aktiviteter...
    </div>

    <div v-else-if="!activities?.length" class="activity-empty">
      Ingen kommende aktiviteter.
    </div>

    <template v-else>
      <div v-for="group in grouped" :key="group.label" class="activity-group">
        <h3 class="activity-date-label">{{ group.label }}</h3>
        <div class="activity-list">
          <a
            v-for="activity in group.activities"
            :key="activity.link"
            :href="activity.link"
            target="_blank"
            class="activity-item"
          >
            <span class="activity-icon">{{ gameIcons[activity.title] || '📅' }}</span>
            <div class="activity-info">
              <span class="activity-title">{{ activity.title }}</span>
              <span class="activity-meta">{{ activity.team }}</span>
            </div>
            <div class="activity-time">
              <span class="activity-type">{{ activity.type }}</span>
              <span class="activity-hour">{{ formatTime(activity.date) }}</span>
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.activity-calendar {
  max-width: 700px;
  margin: 0 auto;
}

.activity-loading,
.activity-empty {
  text-align: center;
  color: #a1a1aa;
  padding: 2rem;
}

.activity-group {
  margin-bottom: 1.5rem;
}

.activity-date-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #f59e0b;
  margin-bottom: 0.75rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.activity-item:hover {
  border-color: #f59e0b;
  transform: translateY(-2px);
}

.activity-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.activity-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.activity-title {
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
}

.activity-meta {
  color: #a1a1aa;
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.activity-time {
  text-align: right;
  flex-shrink: 0;
}

.activity-type {
  display: block;
  font-size: 0.75rem;
  color: #a1a1aa;
}

.activity-hour {
  font-weight: 700;
  color: #f59e0b;
  font-size: 1.1rem;
}

@media (max-width: 500px) {
  .activity-item {
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }

  .activity-icon {
    font-size: 1.25rem;
  }

  .activity-title {
    font-size: 0.9rem;
  }
}
</style>
