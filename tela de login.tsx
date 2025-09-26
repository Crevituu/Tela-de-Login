import React, { useState } from 'react';
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Label } from "/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"

const PurpleLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert('Login realizado com sucesso!');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-4" style={{
      backgroundImage: 'url("https://placeholder-image-service.onrender.com/image/1200x800?prompt=Subtle+purple+textured+background+with+delicate+patterns+and+soft+gradient+overlay&id=background-texture")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }}>
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-purple-300 shadow-lg shadow-purple-900/20">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-purple-900">
            Bem-vindo de volta
          </CardTitle>
          <CardDescription className="text-purple-600">
            Entre na sua conta para continuar
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-800">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-purple-800">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-purple-700">Lembrar-me</span>
              </label>
              
              <a href="#" className="text-purple-600 hover:text-purple-800 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
            
            <div className="text-center text-sm text-purple-600">
              Não tem uma conta?{' '}
              <a href="#" className="text-purple-800 hover:text-purple-900 hover:underline font-medium">
                Criar conta
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PurpleLoginScreen;
