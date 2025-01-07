import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Авторизация</CardTitle>
          <CardDescription>
            Введите логин и пароль для входа в аккаунт
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="login">Логин</Label>
                <Input
                  id="login"
                  placeholder="логин"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <Input id="password" type="password" placeholder="пароль" required />
              </div>
              <Button type="submit" className="w-full">
                Войти
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
